import { SidebarContent, SidebarHeader } from '@molecules';
import { Sidebar as UiSidebar } from '@ui/sidebar';

import { type SidebarGroupType } from '@molecules';

type SidebarProps = {
	className?: string;
	sidebarGroups?: SidebarGroupType[];
};

function Sidebar({ className, sidebarGroups }: SidebarProps) {
	return (
		<UiSidebar className={className}>
			<SidebarHeader />
			<SidebarContent sidebarGroups={sidebarGroups} />
		</UiSidebar>
	);
}

export default Sidebar;
