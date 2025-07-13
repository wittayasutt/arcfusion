import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import Switch from './Switch';

const meta = {
	title: 'Atoms/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		checked: {
			control: 'boolean',
			description: 'Whether the switch is checked',
		},
		label: {
			control: 'text',
			description: 'Label text displayed next to the switch',
		},
		onCheckedChange: {
			control: false,
			description: 'Callback function when the switch state changes',
		},
	},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		checked: false,
		label: 'Enable notifications',
		onCheckedChange: () => {},
	},
};

export const Checked: Story = {
	args: {
		checked: true,
		label: 'Dark mode',
		onCheckedChange: () => {},
	},
};

export const WithoutLabel: Story = {
	args: {
		checked: false,
		onCheckedChange: () => {},
	},
};

export const LongLabel: Story = {
	args: {
		checked: false,
		label:
			'This is a very long label that demonstrates how the switch component handles longer text content',
		onCheckedChange: () => {},
	},
};

export const Interactive: Story = {
	render: () => {
		const [checked, setChecked] = useState(false);

		return (
			<Switch
				checked={checked}
				label="Toggle me"
				onCheckedChange={() => setChecked(!checked)}
			/>
		);
	},
};
