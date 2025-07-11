import clsx from 'clsx';

import { useChatContext } from '@contexts/ChatContext';
import { useChatResetSession } from '@services';

type ChatResetSessionProps = {
	className?: string;
};

function ChatResetSession({ className }: ChatResetSessionProps) {
	const { currentChatId } = useChatContext();
	const { mutate: resetSession, isPending } = useChatResetSession();

	const handleResetSession = () => {
		if (!currentChatId) return;

		try {
			resetSession(currentChatId);
			// setCurrentChatId(null);
		} catch (error) {
			console.error(error);
		}
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
