import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type ChatCreateResponseType } from '@/types';
import { axios } from '@/utils';

const createChat = async () => {
	const { data } = await axios.post<ChatCreateResponseType>('/api/chat/create');
	return data;
};

export const useChatCreate = (): UseQueryResult<ChatCreateResponseType> => {
	return useQuery({
		queryFn: () => createChat(),
		queryKey: ['chat', 'create'],
	});
};
