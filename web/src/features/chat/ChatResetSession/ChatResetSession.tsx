import clsx from 'clsx';

type ChatResetSessionProps = {
	className?: string;
	noSession?: boolean;
	onClick?: () => void;
};

function ChatResetSession({
	className,
	noSession = true,
	onClick,
}: ChatResetSessionProps) {
	if (!noSession) {
		return (
			<p
				className={clsx(
					'text-muted-foreground hover:text-primary cursor-pointer text-sm transition-colors',
					className,
				)}
				onClick={onClick}
			>
				Reset
			</p>
		);
	}

	return null;
}

export default ChatResetSession;
