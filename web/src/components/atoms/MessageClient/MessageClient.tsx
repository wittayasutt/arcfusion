type MessageClientProps = {
	message?: string;
};

function MessageClient({ message }: MessageClientProps) {
	return (
		<p className="bg-primary-foreground rounded-lg px-4 py-2">{message}</p>
	);
}

export default MessageClient;
