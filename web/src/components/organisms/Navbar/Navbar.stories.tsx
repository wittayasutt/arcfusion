import type { Meta, StoryObj } from '@storybook/react-vite';

import Navbar from './Navbar';

const meta = {
	title: 'Organisms/Navbar',
	component: Navbar,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {
		leftLabel: {
			control: 'text',
			description: 'Content displayed on the left side of the navbar',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes to apply to the navbar',
		},
	},
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const WithLabel: Story = {
	args: {
		leftLabel: 'My Application',
	},
};

export const WithReactNode: Story = {
	args: {
		leftLabel: (
			<div className="flex items-center gap-2">
				<div className="h-6 w-6 rounded bg-blue-500" />
				<span className="font-semibold">Brand Logo</span>
			</div>
		),
	},
};

export const WithCustomClassName: Story = {
	args: {
		leftLabel: 'Custom Styled App',
		className: 'bg-blue-100 border-blue-300',
	},
};

export const WithLongLabel: Story = {
	args: {
		leftLabel:
			'This is a very long application name that demonstrates text handling',
	},
};
