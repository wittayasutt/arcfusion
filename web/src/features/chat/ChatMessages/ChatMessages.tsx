import { useMemo } from 'react';

import { type MessageType } from '@types';
import { MessageInteraction } from '@molecules';

const mockMessages: MessageType[] = [
	{
		id: 'msg_001',
		chat_id: 'chat_123',
		question: 'What is the weather like today?',
		answer:
			"I'm unable to check the current weather as I don't have access to real-time data. You might want to check a weather app or website for accurate current conditions.",
		source: 'assistant',
		timestamp: new Date('2025-07-10T05:13:30.898258'),
	},
	{
		id: 'msg_002',
		chat_id: 'chat_123',
		question: 'Can you help me write a JavaScript function?',
		answer:
			"Of course! I'd be happy to help you write a JavaScript function. Could you tell me what specific functionality you need the function to perform?",
		source: 'assistant',
		timestamp: new Date('2025-07-10T05:15:45.123456'),
	},
	{
		id: 'msg_003',
		chat_id: 'chat_123',
		question: 'How do I center a div in CSS?',
		answer:
			'There are several ways to center a div in CSS. Here are the most common methods:\n\n1. Using Flexbox:\n```css\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n```\n\n2. Using CSS Grid:\n```css\n.container {\n  display: grid;\n  place-items: center;\n}\n```',
		source: 'assistant',
		timestamp: new Date('2025-07-10T05:18:12.456789'),
	},
	{
		id: 'msg_004',
		chat_id: 'chat_123',
		question: "What's the difference between let and const in JavaScript?",
		answer:
			'The main differences between `let` and `const` in JavaScript are:\n\n- **const**: Creates a constant reference that cannot be reassigned after declaration. Must be initialized when declared.\n- **let**: Creates a variable that can be reassigned. Can be declared without initialization.\n\nBoth have block scope and are not hoisted like `var`.',
		source: 'assistant',
		timestamp: new Date('2025-07-10T05:22:33.789012'),
	},
	{
		id: 'msg_005',
		chat_id: 'chat_123',
		question: 'How do I handle errors in async/await?',
		answer:
			"You can handle errors in async/await using try/catch blocks:\n\n```javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error fetching data:', error);\n    throw error;\n  }\n}\n```",
		source: 'assistant',
		timestamp: new Date('2025-07-10T05:25:07.234567'),
	},
];

type ChatMessagesProps = {
	messages?: MessageType[];
};

function ChatMessages({ messages }: ChatMessagesProps) {
	const sortedMessages = useMemo(() => {
		const messagesToSort = messages || mockMessages;

		return [...messagesToSort].sort(
			(a, b) =>
				new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
		);
	}, [messages]);

	return (
		<div>
			{sortedMessages.map((message) => (
				<MessageInteraction
					key={message.id}
					answer={message.answer}
					question={message.question}
				/>
			))}
		</div>
	);
}

export default ChatMessages;
