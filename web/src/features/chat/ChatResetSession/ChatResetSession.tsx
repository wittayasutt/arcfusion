import clsx from 'clsx';
import { useChatContext } from '@contexts/ChatContext';

type ChatResetSessionProps = {
	className?: string;
};

function ChatResetSession({ className }: ChatResetSessionProps) {
	const { currentChatId, resetChat } = useChatContext();

	const handleResetSession = () => {
		resetChat();
	};

	if (!!currentChatId) {
		return (
			<p
				className={clsx(
					'text-muted-foreground hover:text-primary cursor-pointer text-sm transition-colors',
					className,
				)}
				onClick={handleResetSession}
			>
				Reset
			</p>
		);
	}

	return null;
}

export default ChatResetSession;
