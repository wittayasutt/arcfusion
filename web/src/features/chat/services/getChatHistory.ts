import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type ChatType } from '@/types';
import { axios } from '@/utils';

const getChatHistory = async (chatId: string) => {
	const { data } = await axios.get<ChatType>(`/api/chat/${chatId}`);
	return data;
};

export const useChatGetHistory = (
	chatId: string | null,
): UseQueryResult<ChatType> => {
	return useQuery({
		enabled: !!chatId,
		queryFn: () => {
			if (!chatId) throw new Error('chatId is required');
			return getChatHistory(chatId);
		},
		queryKey: ['chat', chatId],
	});
};
