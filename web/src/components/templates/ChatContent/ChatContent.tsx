import {
	ChatInput,
	ChatMemoryIndicator,
	ChatMessages,
	ChatResetSession,
} from '@/features/chat';

function ChatContent() {
	return (
		<div className="relative h-full">
			<div className="mx-auto flex h-full max-w-2xl flex-col px-4">
				<div className="bg-background sticky top-10 flex min-h-12 items-center">
					<ChatMemoryIndicator />
					<ChatResetSession className="ml-auto" />
				</div>
				<div className="flex-1">
					<ChatMessages />
				</div>
				<div className="bg-background sticky bottom-0 pb-6">
					<ChatInput />
				</div>
			</div>
		</div>
	);
}

export default ChatContent;
