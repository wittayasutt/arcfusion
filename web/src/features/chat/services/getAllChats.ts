import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type ChatListType } from '@/types';
import { axios } from '@/utils';

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
