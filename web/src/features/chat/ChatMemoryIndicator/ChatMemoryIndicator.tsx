import { CircleCheckBig, LoaderCircle } from 'lucide-react';

import { useChatContext } from '../ChatContext';

function ChatMemoryIndicator() {
	const { currentChatId, isLoading } = useChatContext();

	const className = 'text-muted-foreground text-sm flex items-center gap-1';

	if (currentChatId && isLoading) {
		return (
			<p className={className}>
				<LoaderCircle className="size-4 animate-spin" />
				Memorizing...
			</p>
		);
	} else if (currentChatId && !isLoading) {
		return (
			<p className={className}>
				<CircleCheckBig className="size-4" />
				Memorized
			</p>
		);
	}

	return null;
}

export default ChatMemoryIndicator;
