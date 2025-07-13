import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import MessageInteraction from './MessageInteraction';

const meta = {
	title: 'Molecules/MessageInteraction',
	component: MessageInteraction,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '512px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		question: {
			control: 'text',
			description: 'The question message from the client',
		},
		answer: {
			control: 'text',
			description: 'The answer message from the server (optional)',
		},
	},
} satisfies Meta<typeof MessageInteraction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		question: 'What is the capital of France?',
		answer: 'The capital of France is Paris.',
	},
};

export const LongConversation: Story = {
	args: {
		question:
			"Can you explain the difference between functional programming and object-oriented programming? I'm trying to understand which approach would be better for a large-scale application.",
		answer:
			'Functional programming emphasizes immutability, pure functions, and declarative code, making it easier to reason about and test. Object-oriented programming focuses on encapsulation, inheritance, and polymorphism, providing better code organization for complex systems. For large-scale applications, both paradigms have their merits, and many modern languages support hybrid approaches that combine the best of both worlds.',
	},
};

export const ShortExchange: Story = {
	args: {
		question: 'Hi!',
		answer: 'Hello!',
	},
};

export const QuestionOnly: Story = {
	args: {
		question: 'What is the meaning of life?',
	},
};

export const DelayedAnswer: Story = {
	render: (args) => {
		const [showAnswer, setShowAnswer] = React.useState(false);

		useEffect(() => {
			const timer = setTimeout(() => {
				setShowAnswer(true);
			}, 300);

			return () => clearTimeout(timer);
		}, []);

		return (
			<MessageInteraction
				question={args.question}
				answer={showAnswer ? args.answer : undefined}
			/>
		);
	},
	args: {
		question: 'What is 2 + 2?',
		answer: '2 + 2 equals 4.',
	},
};
