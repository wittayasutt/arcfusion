import { SquarePen } from 'lucide-react';

import { SidebarContent, SidebarHeader } from '@molecules';
import { Sidebar as UiSidebar } from '@ui/sidebar';

function Sidebar() {
	const items = [
		{
			label:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa quam nobis iste quasi a quae eum commodi quos magni quo reprehenderit dolorem cum quis, et ullam, fugit asperiores quisquam.',
			onClickRemove: () => {
				// TODO: Implement remove chat
			},
		},
		{
			label: 'Inbox',
			onClickRemove: () => {
				// TODO: Implement remove chat
			},
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
