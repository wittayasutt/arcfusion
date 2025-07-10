import { type MemoryStatusType } from './types';

type ChatMemoryIndicatorProps = {
	status?: MemoryStatusType;
};

function ChatMemoryIndicator({ status = 'idle' }: ChatMemoryIndicatorProps) {
	const className = 'text-muted-foreground text-sm';

	if (status === 'memorizing') {
		return <p className={className}>Memorizing...</p>;
	} else if (status === 'memorized') {
		return <p className={className}>Memorized</p>;
	}

	return null;
}

export default ChatMemoryIndicator;
