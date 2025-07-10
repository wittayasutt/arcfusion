import { CircleCheckBig, LoaderCircle } from 'lucide-react';

import { type MemoryStatusType } from './types';

type ChatMemoryIndicatorProps = {
	status?: MemoryStatusType;
};

function ChatMemoryIndicator({ status = 'idle' }: ChatMemoryIndicatorProps) {
	const className = 'text-muted-foreground text-sm flex items-center gap-1';

	if (status === 'memorizing') {
		return (
			<p className={className}>
				<LoaderCircle className="size-4 animate-spin" />
				Memorizing...
			</p>
		);
	} else if (status === 'memorized') {
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
