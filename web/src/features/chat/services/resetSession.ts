import {
	useMutation,
	type UseMutationResult,
	useQueryClient,
} from '@tanstack/react-query';
import { axios } from '@/utils';

import { type ChatResetResponseType } from '../types';

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
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: resetSession,
		mutationKey: ['chat', 'reset'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['chat', 'getAll'] });
		},
	});
};
