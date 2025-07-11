import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useReducer,
} from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { type ChatItemType, type MessageType } from '@types';

import { type ChatAction, type ChatContextType, type ChatState } from './types';
import {
	useChatCreate,
	useChatGetAll,
	useChatGetFiles,
	useChatGetHistory,
	useChatResetSession,
	useChatSendMessage,
	useChatUploadFiles,
} from '../services';

const initialState: ChatState = {
	chats: [],
	currentChatId: null,
	messages: [],
	files: [],
	isLoading: false,
	error: null,
};

function chatReducer(state: ChatState, action: ChatAction): ChatState {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return {
				...state,
				messages: [...state.messages, action.payload],
			};
		case 'SET_CHATS':
			return {
				...state,
				chats: action.payload,
			};
		case 'SET_CURRENT_CHAT':
			return {
				...state,
				currentChatId: action.payload,
			};
		case 'SET_ERROR':
			return {
				...state,
				error: action.payload,
			};
		case 'SET_FILES':
			return {
				...state,
				files: action.payload,
			};
		case 'SET_LOADING':
			return {
				...state,
				isLoading: action.payload,
			};
		case 'SET_MESSAGES':
			return {
				...state,
				messages: action.payload,
			};
		case 'RESET_CHAT':
			return {
				...initialState,
				files: state.files,
			};
		default:
			return state;
	}
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(chatReducer, initialState);

	const queryClient = useQueryClient();
	const { mutateAsync: createChat } = useChatCreate();
	const { data: allChats } = useChatGetAll();
	const { data: fileList } = useChatGetFiles();
	const { data: chatHistory } = useChatGetHistory(state.currentChatId);
	const { mutateAsync: resetSession } = useChatResetSession();
	const { mutateAsync: sendChatMessage } = useChatSendMessage();
	const { mutateAsync: uploadFiles } = useChatUploadFiles();

	const addMessage = (message: MessageType) => {
		dispatch({ type: 'ADD_MESSAGE', payload: message });
	};

	const newChat = async () => {
		if (!state.currentChatId || state.messages.length <= 0) return;

		await queryClient.invalidateQueries({ queryKey: ['chat', 'getAll'] });
		dispatch({ type: 'RESET_CHAT' });
	};

	const removeChat = async (chatId: string) => {
		try {
			await resetSession(chatId);
			await queryClient.invalidateQueries({ queryKey: ['chat', 'getAll'] });
		} catch (error) {
			setError(
				error instanceof Error ? error.message : 'Failed to remove chat',
			);
		}

		if (chatId === state.currentChatId) {
			dispatch({ type: 'RESET_CHAT' });
		}
	};

	const resetChat = async () => {
		if (!state.currentChatId) return;

		try {
			await resetSession(state.currentChatId);
			dispatch({ type: 'RESET_CHAT' });
		} catch (error) {
			setError(error instanceof Error ? error.message : 'Failed to reset chat');
		}

		await queryClient.invalidateQueries({ queryKey: ['chat', 'getAll'] });
	};

	const selectChat = async (chatId: string) => {
		dispatch({ type: 'SET_CURRENT_CHAT', payload: chatId });
		await queryClient.invalidateQueries({ queryKey: ['chat', 'getAll'] });
	};

	const sendMessage = async (message: string) => {
		try {
			setLoading(true);
			setError(null);

			let chatId = state.currentChatId;

			if (chatId) {
				await sendChatMessage({
					chatId,
					question: message.trim(),
				});
			} else {
				const response = await createChat();
				chatId = response.chat_id;
				setCurrentChatId(chatId);

				await sendChatMessage({
					chatId,
					question: message.trim(),
				});
			}

			await queryClient.invalidateQueries({ queryKey: ['chat', chatId] });
		} catch (error) {
			setError(
				error instanceof Error ? error.message : 'Failed to send message',
			);
		} finally {
			setLoading(false);
		}
	};

	const setChats = (chats: ChatItemType[]) => {
		dispatch({ type: 'SET_CHATS', payload: chats });
	};

	const setCurrentChatId = (chatId: string) => {
		dispatch({ type: 'SET_CURRENT_CHAT', payload: chatId });
	};

	const setError = (error: string | null) => {
		dispatch({ type: 'SET_ERROR', payload: error });
	};

	const setFiles = (files: FileType[]) => {
		dispatch({ type: 'SET_FILES', payload: files });
	};

	const setLoading = (loading: boolean) => {
		dispatch({ type: 'SET_LOADING', payload: loading });
	};

	const setMessages = (messages: MessageType[]) => {
		dispatch({ type: 'SET_MESSAGES', payload: messages });
	};

	const uploadFile = async (files: File[]) => {
		try {
			setLoading(true);
			setError(null);

			await uploadFiles(files);
		} catch (error) {
			setError(
				error instanceof Error ? error.message : 'Failed to upload file',
			);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (allChats) {
			setChats(allChats.chats.reverse());
		}
	}, [allChats]);

	useEffect(() => {
		if (chatHistory?.messages) {
			setMessages(chatHistory.messages);
		}
	}, [chatHistory]);

	useEffect(() => {
		if (fileList) {
			setFiles(fileList.files);
		}
	}, [fileList]);

	const value: ChatContextType = {
		...state,
		addMessage,
		newChat,
		removeChat,
		resetChat,
		selectChat,
		sendMessage,
		setCurrentChatId,
		setError,
		setLoading,
		setMessages,
		uploadFile,
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
