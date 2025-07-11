import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { type ChatCreateResponseType } from '@/types';
import { axios } from '@/utils';

const createChat = async () => {
	const { data } = await axios.post<ChatCreateResponseType>('/api/chat/create');
	return data;
};

export const useChatCreate = (): UseMutationResult<ChatCreateResponseType> => {
	return useMutation({
		mutationFn: createChat,
		mutationKey: ['chat', 'create'],
	});
};
