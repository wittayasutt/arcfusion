export type FileType = {
	filename: string;
	size: number;
	upload_time: Date;
	id: string;
};

export type FileListType = {
	files: FileType[];
	total_files: number;
	total_size_bytes: number;
};
