import { createContext, type ReactNode, useContext, useReducer } from 'react';
import { type MessageType } from '@/types/chat';

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
	setCurrentChatId: (chat: string) => void;
	addMessage: (message: MessageType) => void;
	setMessages: (messages: MessageType[]) => void;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
	resetChat: () => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(chatReducer, initialState);

	const setCurrentChatId = (chatId: string) => {
		dispatch({ type: 'SET_CURRENT_CHAT', payload: chatId });
	};

	const addMessage = (message: MessageType) => {
		dispatch({ type: 'ADD_MESSAGE', payload: message });
	};

	const setMessages = (messages: MessageType[]) => {
		dispatch({ type: 'SET_MESSAGES', payload: messages });
	};

	const setLoading = (loading: boolean) => {
		dispatch({ type: 'SET_LOADING', payload: loading });
	};

	const setError = (error: string | null) => {
		dispatch({ type: 'SET_ERROR', payload: error });
	};

	const resetChat = () => {
		dispatch({ type: 'RESET_CHAT' });
	};

	const value: ChatContextType = {
		...state,
		setCurrentChatId,
		addMessage,
		setMessages,
		setLoading,
		setError,
		resetChat,
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
