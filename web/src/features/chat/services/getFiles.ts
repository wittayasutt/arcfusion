import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type FileListType } from '@/types';
import { axios } from '@/utils';

const getFiles = async () => {
	const { data } = await axios.get<FileListType>('/api/files');
	return data;
};

export const useChatGetFiles = (): UseQueryResult<FileListType> => {
	return useQuery({
		queryFn: getFiles,
		queryKey: ['chat', 'getFiles'],
	});
};
