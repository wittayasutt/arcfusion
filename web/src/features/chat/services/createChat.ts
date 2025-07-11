import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { axios } from '@/utils';

import { type ChatCreateResponseType } from '../types';

const createChat = async () => {
	const { data } = await axios.post<ChatCreateResponseType>('/api/chat/create');
	return data;
};

export const useChatCreate = (): UseMutationResult<
	ChatCreateResponseType,
	Error,
	void
> => {
	return useMutation({
		mutationFn: createChat,
		mutationKey: ['chat', 'create'],
	});
};
