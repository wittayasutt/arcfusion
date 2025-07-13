import type { Meta, StoryObj } from '@storybook/react-vite';

import CarouselMessages from './CarouselMessages';
import { type CarouselMessageType } from './types';

const meta = {
	title: 'Molecules/CarouselMessages',
	component: CarouselMessages,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		messages: {
			control: 'object',
			description: 'Array of carousel messages to display',
		},
	},
} satisfies Meta<typeof CarouselMessages>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleMessages: CarouselMessageType[] = [
	{
		id: '1',
		message: 'This is the first carousel message that demonstrates how multiple messages appear.',
	},
	{
		id: '2',
		message: 'Second message with different content to show variety.',
	},
	{
		id: '3',
		message: 'Third message to complete the set and show the carousel behavior.',
	},
];

const longMessages: CarouselMessageType[] = [
	{
		id: '1',
		message: 'This is a very long message that will test how the component handles text overflow and line clamping. It should truncate after 3 lines and show ellipsis when the content exceeds the maximum height.',
	},
	{
		id: '2',
		message: 'Another long message with extensive content to demonstrate the carousel behavior with multiple lengthy items that may require scrolling or pagination.',
	},
	{
		id: '3',
		message: 'The third long message continues the pattern of testing how the carousel handles extensive text content across multiple items.',
	},
	{
		id: '4',
		message: 'Fourth message to test carousel behavior with more than three items.',
	},
];

const shortMessages: CarouselMessageType[] = [
	{
		id: '1',
		message: 'Short',
	},
	{
		id: '2',
		message: 'Brief',
	},
	{
		id: '3',
		message: 'Concise',
	},
];

export const Default: Story = {
	args: {
		messages: sampleMessages,
	},
};

export const LongMessages: Story = {
	args: {
		messages: longMessages,
	},
};

export const ShortMessages: Story = {
	args: {
		messages: shortMessages,
	},
};

export const SingleMessage: Story = {
	args: {
		messages: [
			{
				id: '1',
				message: 'A single carousel message to test the component with minimal data.',
			},
		],
	},
};

export const ManyMessages: Story = {
	args: {
		messages: Array.from({ length: 10 }, (_, i) => ({
			id: `${i + 1}`,
			message: `Message ${i + 1}: This is carousel message number ${i + 1} to test scrolling behavior with many items.`,
		})),
	},
};

export const EmptyMessages: Story = {
	args: {
		messages: [],
	},
};