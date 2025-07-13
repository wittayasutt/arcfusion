import {
	Home,
	BarChart3,
	TrendingUp,
	FileText,
	Image,
	Video,
	User,
	Settings,
	HelpCircle,
	MessageSquare,
	Folder,
	CheckSquare,
	Calculator,
	Calendar,
} from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarProvider } from '@ui/sidebar';

import SidebarContent from './SidebarContent';

const meta: Meta<typeof SidebarContent> = {
	title: 'Molecules/SidebarContent',
	component: SidebarContent,
	decorators: [
		(Story) => (
			<div className="h-32">
				<SidebarProvider>
					<Story />
				</SidebarProvider>
			</div>
		),
	],
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarContent>;

const mockSidebarGroups = [
	{
		title: 'Navigation',
		activeItemId: 'home',
		items: [
			{
				id: 'home',
				label: 'Home',
				icon: <Home size={16} />,
				onClick: () => console.log('Home clicked'),
			},
			{
				id: 'dashboard',
				label: 'Dashboard',
				icon: <BarChart3 size={16} />,
				onClick: () => console.log('Dashboard clicked'),
			},
			{
				id: 'analytics',
				label: 'Analytics',
				icon: <TrendingUp size={16} />,
				onClick: () => console.log('Analytics clicked'),
			},
		],
	},
	{
		title: 'Content',
		items: [
			{
				id: 'documents',
				label: 'Documents',
				icon: <FileText size={16} />,
				onClick: () => console.log('Documents clicked'),
				onClickRemove: () => console.log('Remove documents clicked'),
			},
			{
				id: 'images',
				label: 'Images',
				icon: <Image size={16} />,
				onClick: () => console.log('Images clicked'),
				onClickRemove: () => console.log('Remove images clicked'),
			},
			{
				id: 'videos',
				label: 'Videos',
				icon: <Video size={16} />,
				onClick: () => console.log('Videos clicked'),
			},
		],
	},
];

export const Default: Story = {
	args: {
		sidebarGroups: mockSidebarGroups,
	},
};

export const Empty: Story = {
	args: {
		sidebarGroups: [],
	},
};

export const SingleGroup: Story = {
	args: {
		sidebarGroups: [
			{
				title: 'Main Menu',
				activeItemId: 'settings',
				items: [
					{
						id: 'profile',
						label: 'Profile',
						icon: <User size={16} />,
						onClick: () => console.log('Profile clicked'),
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

export const GroupWithoutTitle: Story = {
	args: {
		sidebarGroups: [
			{
				items: [
					{
						id: 'help',
						label: 'Help & Support',
						icon: <HelpCircle size={16} />,
						onClick: () => console.log('Help clicked'),
					},
					{
						id: 'feedback',
						label: 'Send Feedback',
						icon: <MessageSquare size={16} />,
						onClick: () => console.log('Feedback clicked'),
					},
				],
			},
		],
	},
};

export const ItemsWithRemoveAction: Story = {
	args: {
		sidebarGroups: [
			{
				title: 'Recent Files',
				items: [
					{
						id: 'file1',
						label: 'Project Report.pdf',
						icon: <FileText size={16} />,
						onClick: () => console.log('File 1 clicked'),
						onClickRemove: () => console.log('Remove file 1'),
					},
					{
						id: 'file2',
						label: 'Meeting Notes.docx',
						icon: <FileText size={16} />,
						onClick: () => console.log('File 2 clicked'),
						onClickRemove: () => console.log('Remove file 2'),
					},
					{
						id: 'file3',
						label: 'Budget Analysis.xlsx',
						icon: <BarChart3 size={16} />,
						onClick: () => console.log('File 3 clicked'),
						onClickRemove: () => console.log('Remove file 3'),
					},
				],
			},
		],
	},
};

export const MultipleGroupsWithActiveStates: Story = {
	args: {
		sidebarGroups: [
			{
				title: 'Workspace',
				activeItemId: 'projects',
				items: [
					{
						id: 'projects',
						label: 'Projects',
						icon: <Folder size={16} />,
						onClick: () => console.log('Projects clicked'),
					},
					{
						id: 'tasks',
						label: 'Tasks',
						icon: <CheckSquare size={16} />,
						onClick: () => console.log('Tasks clicked'),
					},
				],
			},
			{
				title: 'Tools',
				activeItemId: 'calculator',
				items: [
					{
						id: 'calculator',
						label: 'Calculator',
						icon: <Calculator size={16} />,
						onClick: () => console.log('Calculator clicked'),
					},
					{
						id: 'calendar',
						label: 'Calendar',
						icon: <Calendar size={16} />,
						onClick: () => console.log('Calendar clicked'),
					},
				],
			},
		],
	},
};

export const NoIcons: Story = {
	args: {
		sidebarGroups: [
			{
				title: 'Text Only Menu',
				activeItemId: 'option2',
				items: [
					{
						id: 'option1',
						label: 'Option One',
						onClick: () => console.log('Option 1 clicked'),
					},
					{
						id: 'option2',
						label: 'Option Two',
						onClick: () => console.log('Option 2 clicked'),
					},
					{
						id: 'option3',
						label: 'Option Three',
						onClick: () => console.log('Option 3 clicked'),
					},
				],
			},
		],
	},
};
