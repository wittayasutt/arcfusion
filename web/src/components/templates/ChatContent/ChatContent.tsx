import {
	ChatInput,
	ChatMemoryIndicator,
	ChatResetSession,
} from '@/features/chat';
import { Toaster } from '@ui/sonner';

function ChatContent() {
	return (
		<div className="h-full">
			<div className="mx-auto flex h-full max-w-2xl flex-col px-4">
				<div className="sticky my-2 flex items-center justify-between">
					<ChatMemoryIndicator status="memorizing" />
					<ChatResetSession noSession={false} onClick={() => {}} />
				</div>
				<div className="flex flex-1">Chat</div>
				<div className="sticky bottom-0 mb-8">
					<ChatInput />
				</div>
			</div>
			<Toaster />
		</div>
	);
}

export default ChatContent;
