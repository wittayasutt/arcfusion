import { useEffect, useRef } from 'react';
import { MessageInteraction } from '@molecules';
import { useChatContext } from '@contexts/ChatContext';

function ChatMessages() {
	const { messages } = useChatContext();
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<>
			{messages.map((message) => (
				<MessageInteraction
					key={message.id}
					answer={message.answer}
					question={message.question}
				/>
			))}
			<div ref={messagesEndRef} />
		</>
	);
}

export default ChatMessages;
