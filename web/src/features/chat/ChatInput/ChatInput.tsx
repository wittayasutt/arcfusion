import { Toaster } from '@ui/sonner';

import { ChatInputForm } from './ChatInputForm';
import { ChatFiles } from '../index';

export function ChatInput() {
	return (
		<>
			<ChatFiles />
			<ChatInputForm />
			<Toaster />
		</>
	);
}

export default ChatInput;
