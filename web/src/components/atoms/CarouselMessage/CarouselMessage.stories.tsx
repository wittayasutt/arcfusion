import type { Meta, StoryObj } from '@storybook/react-vite';
import { Carousel, CarouselContent } from '@ui/carousel';

import CarouselItem from './CarouselMessage';

const meta = {
	title: 'Atoms/CarouselMessage',
	component: CarouselItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<Carousel>
				<CarouselContent className="ml-auto">
					<Story />
				</CarouselContent>
			</Carousel>
		),
	],
	argTypes: {
		message: {
			control: 'text',
			description: 'The message text to display in the carousel item',
		},
	},
} satisfies Meta<typeof CarouselItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		message:
			'This is a default carousel message that shows how the component looks.',
	},
};

export const ShortMessage: Story = {
	args: {
		message: 'Short message',
	},
};

export const LongMessage: Story = {
	args: {
		message:
			'This is a very long message that will test how the component handles text overflow and line clamping. It should truncate after 3 lines and show ellipsis when the content exceeds the maximum height of the carousel item.',
	},
};

export const MultilineMessage: Story = {
	args: {
		message:
			'This is a multiline message.\nIt contains line breaks\nto test how the component renders multiple lines of text.',
	},
};
