import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { type FileUploadResponseType } from '@/types';
import { axios } from '@/utils';

const uploadFiles = async (files: File[]) => {
	const { data } = await axios.post<FileUploadResponseType>('/api/upload', {
		files,
	});

	return data;
};

export const useChatUploadFiles = (): UseMutationResult<
	FileUploadResponseType,
	Error,
	File[]
> => {
	return useMutation({
		mutationFn: uploadFiles,
		mutationKey: ['chat', 'uploadFiles'],
	});
};
