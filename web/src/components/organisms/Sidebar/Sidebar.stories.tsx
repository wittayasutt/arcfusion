import { Home, Settings, FileText } from 'lucide-react';

import { SidebarToggle } from '@atoms';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarProvider } from '@ui/sidebar';

import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
	title: 'Organisms/Sidebar',
	component: Sidebar,
	decorators: [
		(Story) => (
			<SidebarProvider>
				<div className="flex h-screen">
					<Story />
					<div className="flex-1 bg-gray-50 p-4">
						<h1 className="mb-2 text-2xl font-bold">Main Content</h1>
						<p className="mt-4 text-gray-600">
							This is the main content area. The sidebar is on the left. Use the
							toggle button below to show/hide the sidebar. When the sidebar is
							closed, only the toggle button will remain visible to reopen it.
						</p>
						<div className="mt-2 flex h-10 w-10 items-center justify-center border">
							<SidebarToggle />
						</div>
					</div>
				</div>
			</SidebarProvider>
		),
	],
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
	args: {
		sidebarGroups: [
			{
				title: 'Main',
				activeItemId: 'home',
				items: [
					{
						id: 'home',
						label: 'Home',
						icon: <Home size={16} />,
						onClick: () => console.log('Home clicked'),
					},
					{
						id: 'settings',
						label: 'Settings',
						icon: <Settings size={16} />,
						onClick: () => console.log('Settings clicked'),
					},
				],
			},
		],
	},
};

export const WithoutSidebarGroups: Story = {
	args: {},
};

export const WithCustomClassName: Story = {
	args: {
		className: 'border-r-4 border-blue-500',
		sidebarGroups: [
			{
				title: 'Documents',
				items: [
					{
						id: 'docs',
						label: 'My Documents',
						icon: <FileText size={16} />,
						onClick: () => console.log('Documents clicked'),
					},
				],
			},
		],
	},
};
