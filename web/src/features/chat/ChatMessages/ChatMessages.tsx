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

	if (!messages?.length) {
		return (
			<div className="flex h-full items-center justify-center">
				<h2 className="text-muted-foreground">
					Just upload your PDF, and feel free to ask me anything!
				</h2>
			</div>
		);
	}

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
