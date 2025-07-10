import { useState, useEffect } from 'react';

const TYPING_SPEED = 50;

export function useTypingAnimation(text: string | undefined) {
	const [displayedMessage, setDisplayedMessage] = useState<string>('');
	const [isTypingCompleted, setIsTypingCompleted] = useState<boolean>(false);

	useEffect(() => {
		if (!text) {
			setDisplayedMessage('');
			setIsTypingCompleted(false);
			return;
		}

		setDisplayedMessage('');
		setIsTypingCompleted(false);

		let index = 0;
		const interval = setInterval(() => {
			if (index < text.length) {
				setDisplayedMessage(text.slice(0, index + 1));
				index++;
			} else {
				setIsTypingCompleted(true);
				clearInterval(interval);
			}
		}, TYPING_SPEED);

		return () => clearInterval(interval);
	}, [text]);

	return { displayedMessage, isTypingCompleted };
}
