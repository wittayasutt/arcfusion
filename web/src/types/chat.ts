export type ChatType = {
	chat_id: string;
	messages: MessageType[];
	message_count: number;
};

export type ChatCreateResponseType = {
	chat_id: string;
	message: string;
};

export type ChatItemType = {
	chat_id: string;
	message_count: number;
	first_question: string;
	last_message_time: Date;
};

export type ChatListType = {
	chats: ChatItemType[];
	total_sessions: number;
	total_messages: number;
};

export type MessageType = {
	answer: string;
	chat_id: string;
	id: string;
	question: string;
	source: string;
	timestamp: Date;
};
