import {
	useMutation,
	type UseMutationResult,
	useQueryClient,
} from '@tanstack/react-query';
import { axios } from '@/utils';

import { type FileUploadResponseType } from '../types';

const uploadFiles = async (files: File[]) => {
	const formData = new FormData();
	files.forEach((file) => {
		formData.append('files', file);
	});

	const { data } = await axios.post<FileUploadResponseType>(
		'/api/upload',
		formData,
		{
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		},
	);

	return data;
};

export const useChatUploadFiles = (): UseMutationResult<
	FileUploadResponseType,
	Error,
	File[]
> => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: uploadFiles,
		mutationKey: ['chat', 'uploadFiles'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['chat', 'getFiles'] });
		},
	});
};
