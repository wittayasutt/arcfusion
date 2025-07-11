import { CarouselMessages } from '@molecules';
import { Toaster } from '@ui/sonner';

import { ChatInputForm } from './ChatInputForm';

//  TODO: Remove this mock messages
const mockMessages = [
	{
		id: '1',
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
	},
	{ id: '2', message: "What's the best way to handle state management?" },
	{ id: '3', message: 'Can you explain useEffect hooks?' },
	{ id: '4', message: 'How do I implement authentication?' },
	{ id: '5', message: 'What are the latest JavaScript features?' },
];

export function ChatInput() {
	return (
		<>
			{/* {mockMessages.length > 0 ? (
				<div className="mb-2">
					<h3 className="text-muted-foreground mb-2 text-sm">
						Recent PDF files
					</h3>
					<CarouselMessages messages={mockMessages} />
				</div>
			) : null} */}
			<ChatInputForm />
			<Toaster />
		</>
	);
}

export default ChatInput;
