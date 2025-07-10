import { LoaderCircle } from 'lucide-react';
import { useEffect } from 'react';

import { useTypingAnimation } from '@hooks/useTypingAnimation';

type MessageServerProps = {
	message?: string;
	showTyping?: boolean;
	setIsTypingCompleted?: (isTypingCompleted: boolean) => void;
};

function MessageServer({
	message,
	showTyping,
	setIsTypingCompleted,
}: MessageServerProps) {
	const { displayedMessage, isTypingCompleted } = showTyping
		? useTypingAnimation(message)
		: { displayedMessage: message, isTypingCompleted: true };

	useEffect(() => {
		if (setIsTypingCompleted) {
			setIsTypingCompleted(isTypingCompleted);
		}
	}, [isTypingCompleted, setIsTypingCompleted]);

	if (!message) {
		return <LoaderCircle className="animate-spin" />;
	}

	return <p>{displayedMessage}</p>;
}

export default MessageServer;
