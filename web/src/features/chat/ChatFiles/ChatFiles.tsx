import { CarouselMessages } from '@molecules';
import { useChatContext } from '../ChatContext';

export function ChatFiles() {
	const { files } = useChatContext();

	const messages = files.map((file) => {
		return {
			id: file.id,
			message: file.filename,
		};
	});

	return (
		<>
			{files.length > 0 ? (
				<div className="mb-2">
					<h3 className="text-muted-foreground mb-2 text-sm">
						Recent PDF files
					</h3>
					<CarouselMessages messages={messages} />
				</div>
			) : null}
		</>
	);
}

export default ChatFiles;
