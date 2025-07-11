import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { axios } from '@/utils';

import { type ChatListType } from '../types';

const getAllChats = async () => {
	const { data } = await axios.get<ChatListType>('/api/chat');
	return data;
};

export const useChatGetAll = (): UseQueryResult<ChatListType> => {
	return useQuery({
		queryFn: getAllChats,
		queryKey: ['chat', 'getAll'],
	});
};
