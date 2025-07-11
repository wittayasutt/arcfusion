import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { type ChatResetResponseType } from '@/types';
import { axios } from '@/utils';

const resetSession = async (chatId: string) => {
	const { data } = await axios.post<ChatResetResponseType>('/api/reset', {
		chat_id: chatId,
	});

	return data;
};

export const useChatResetSession = (): UseMutationResult<
	ChatResetResponseType,
	Error,
	string
> => {
	return useMutation({
		mutationFn: resetSession,
		mutationKey: ['chat', 'reset'],
	});
};
