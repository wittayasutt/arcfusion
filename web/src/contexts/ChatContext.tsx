import { createContext, type ReactNode, useContext, useReducer } from 'react';
import { type MessageType } from '@/types/chat';
import { useChatCreate, useChatSendMessage } from '@services';

type ChatState = {
	currentChatId: string | null;
	messages: MessageType[];
	isLoading: boolean;
	error: string | null;
};

type ChatAction =
	| { type: 'SET_CURRENT_CHAT'; payload: string }
	| { type: 'ADD_MESSAGE'; payload: MessageType }
	| { type: 'SET_MESSAGES'; payload: MessageType[] }
	| { type: 'SET_LOADING'; payload: boolean }
	| { type: 'SET_ERROR'; payload: string | null }
	| { type: 'RESET_CHAT' };

const initialState: ChatState = {
	currentChatId: null,
	messages: [],
	isLoading: false,
	error: null,
};

function chatReducer(state: ChatState, action: ChatAction): ChatState {
	switch (action.type) {
		case 'SET_CURRENT_CHAT':
			return {
				...state,
				currentChatId: action.payload,
			};
		case 'ADD_MESSAGE':
			return {
				...state,
				messages: [...state.messages, action.payload],
			};
		case 'SET_MESSAGES':
			return {
				...state,
				messages: action.payload,
			};
		case 'SET_LOADING':
			return {
				...state,
				isLoading: action.payload,
			};
		case 'SET_ERROR':
			return {
				...state,
				error: action.payload,
			};
		case 'RESET_CHAT':
			return {
				...initialState,
			};
		default:
			return state;
	}
}

type ChatContextType = ChatState & {
	addMessage: (message: MessageType) => void;
	resetChat: () => void;
	sendMessage: (message: string) => Promise<void>;
	setCurrentChatId: (chat: string) => void;
	setError: (error: string | null) => void;
	setLoading: (loading: boolean) => void;
	setMessages: (messages: MessageType[]) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(chatReducer, initialState);
	const { mutateAsync: createChat } = useChatCreate();
	const { mutateAsync: sendChatMessage } = useChatSendMessage();

	const addMessage = (message: MessageType) => {
		dispatch({ type: 'ADD_MESSAGE', payload: message });
	};

	const resetChat = () => {
		dispatch({ type: 'RESET_CHAT' });
	};

	const sendMessage = async (message: string) => {
		try {
			setLoading(true);
			setError(null);

			if (state.currentChatId) {
				await sendChatMessage({
					chatId: state.currentChatId,
					question: message.trim(),
				});
			} else {
				const response = await createChat();
				setCurrentChatId(response.chat_id);

				await sendChatMessage({
					chatId: response.chat_id,
					question: message.trim(),
				});
			}
		} catch (error) {
			setError(
				error instanceof Error ? error.message : 'Failed to send message',
			);
		} finally {
			setLoading(false);
		}
	};

	const setCurrentChatId = (chatId: string) => {
		dispatch({ type: 'SET_CURRENT_CHAT', payload: chatId });
	};

	const setError = (error: string | null) => {
		dispatch({ type: 'SET_ERROR', payload: error });
	};

	const setLoading = (loading: boolean) => {
		dispatch({ type: 'SET_LOADING', payload: loading });
	};

	const setMessages = (messages: MessageType[]) => {
		dispatch({ type: 'SET_MESSAGES', payload: messages });
	};

	const value: ChatContextType = {
		...state,
		addMessage,
		resetChat,
		sendMessage,
		setCurrentChatId,
		setError,
		setLoading,
		setMessages,
	};

	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChatContext() {
	const context = useContext(ChatContext);
	if (context === undefined) {
		throw new Error('useChatContext must be used within a ChatProvider');
	}
	return context;
}
