import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { type ChatSendMessageResponseType } from '@/types';
import { axios } from '@/utils';

type sendMessageType = {
	chatId: string;
	question: string;
};

const sendMessage = async ({ chatId, question }: sendMessageType) => {
	const { data } = await axios.post<ChatSendMessageResponseType>('/api/chat', {
		chat_id: chatId,
		question,
	});

	return data;
};

export const useChatSendMessage = (): UseMutationResult<
	ChatSendMessageResponseType,
	Error,
	sendMessageType
> => {
	return useMutation({
		mutationFn: sendMessage,
		mutationKey: ['chat', 'sendMessage'],
	});
};
