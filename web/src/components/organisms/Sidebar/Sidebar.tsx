import { SquarePen } from 'lucide-react';

import { SidebarContent, SidebarHeader } from '@molecules';
import { Sidebar as UiSidebar } from '@ui/sidebar';

function Sidebar() {
	const items = [
		{
			label: 'Home',
		},
		{
			label: 'Inbox',
		},
		{
			label: 'Calendar',
		},
		{
			label: 'Search',
		},
		{
			label: 'Settings',
		},
	];

	const sidebarGroups = [
		{
			items: [
				{
					icon: <SquarePen />,
					label: 'New chat',
					onClick: () => {
						// TODO: Implement new chat
					},
				},
			],
		},
		{
			title: 'Chats',
			items,
		},
	];

	return (
		<UiSidebar>
			<SidebarHeader />
			<SidebarContent sidebarGroups={sidebarGroups} />
		</UiSidebar>
	);
}

export default Sidebar;
