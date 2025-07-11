import { type ChatItemType, type MessageType } from '@types';

export type ChatAction =
	| { type: 'SET_CURRENT_CHAT'; payload: string }
	| { type: 'ADD_MESSAGE'; payload: MessageType }
	| { type: 'SET_MESSAGES'; payload: MessageType[] }
	| { type: 'SET_CHATS'; payload: ChatItemType[] }
	| { type: 'SET_LOADING'; payload: boolean }
	| { type: 'SET_ERROR'; payload: string | null }
	| { type: 'RESET_CHAT' };

export type ChatContextType = ChatState & {
	addMessage: (message: MessageType) => void;
	newChat: () => Promise<void>;
	removeChat: (chatId: string) => Promise<void>;
	resetChat: () => void;
	selectChat: (chatId: string) => void;
	sendMessage: (message: string) => Promise<void>;
	setCurrentChatId: (chat: string) => void;
	setError: (error: string | null) => void;
	setLoading: (loading: boolean) => void;
	setMessages: (messages: MessageType[]) => void;
	uploadFile: (files: File[]) => Promise<void>;
};

export type ChatState = {
	chats: ChatItemType[];
	currentChatId: string | null;
	messages: MessageType[];
	isLoading: boolean;
	error: string | null;
};
