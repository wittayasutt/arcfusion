import type { Meta, StoryObj } from '@storybook/react-vite';
import { Home, Settings, FileText } from 'lucide-react';
import { SidebarProvider } from '@ui/sidebar';

import SidebarMenuButton from './SidebarMenuButton';

const meta = {
	title: 'Atoms/SidebarMenuButton',
	component: SidebarMenuButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="h-32">
				<SidebarProvider>
					<div className="bg-background h-24 w-64 rounded-md border p-4">
						<Story />
					</div>
				</SidebarProvider>
			</div>
		),
	],
	argTypes: {
		id: {
			control: 'text',
			description: 'Unique identifier for the sidebar item',
		},
		label: {
			control: 'text',
			description: 'Text label displayed in the button',
		},
		isActive: {
			control: 'boolean',
			description: 'Whether the button is in active state',
		},
		icon: {
			control: false,
			description: 'React node for the icon',
		},
		onClick: {
			control: false,
			description: 'Callback function when the button is clicked',
		},
		onClickRemove: {
			control: false,
			description: 'Callback function when the remove button is clicked',
		},
	},
} satisfies Meta<typeof SidebarMenuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: 'home',
		label: 'Home',
		icon: <Home size={16} />,
		onClick: () => {},
	},
};

export const Active: Story = {
	args: {
		id: 'settings',
		label: 'Settings',
		icon: <Settings size={16} />,
		isActive: true,
		onClick: () => {},
	},
};

export const WithRemoveButton: Story = {
	args: {
		id: 'document',
		label: 'Document Title',
		icon: <FileText size={16} />,
		onClick: () => {},
		onClickRemove: () => {},
	},
};

export const LongLabel: Story = {
	args: {
		id: 'long-text',
		label: 'This is a very long label that should be truncated properly',
		icon: <FileText size={16} />,
		onClick: () => {},
		onClickRemove: () => {},
	},
};

export const NoIcon: Story = {
	args: {
		id: 'no-icon',
		label: 'No Icon Button',
		onClick: () => {},
	},
};
