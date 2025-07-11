import { MessageInteraction } from '@molecules';
import { useChatContext } from '@contexts/ChatContext';

function ChatMessages() {
	const { messages } = useChatContext();

	return (
		<>
			{messages.map((message) => (
				<MessageInteraction
					key={message.id}
					answer={message.answer}
					question={message.question}
				/>
			))}
		</>
	);
}

export default ChatMessages;
