type ChatResetSessionProps = {
	noSession?: boolean;
	onClick?: () => void;
};

function ChatResetSession({
	noSession = true,
	onClick,
}: ChatResetSessionProps) {
	if (!noSession) {
		return (
			<p
				className="text-muted-foreground hover:text-primary cursor-pointer text-sm transition-colors"
				onClick={onClick}
			>
				Reset
			</p>
		);
	}

	return null;
}

export default ChatResetSession;
