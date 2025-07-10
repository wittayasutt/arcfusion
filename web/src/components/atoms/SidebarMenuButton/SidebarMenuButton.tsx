import { SidebarMenuButton as UiSidebarMenuButton } from '@ui/sidebar';

import { type SidebarItemType } from './types';

type SidebarMenuButtonProps = SidebarItemType;

function SidebarMenuButton({ icon, label, onClick }: SidebarMenuButtonProps) {
	return (
		<UiSidebarMenuButton className="cursor-pointer" onClick={onClick}>
			{icon}
			<span>{label}</span>
		</UiSidebarMenuButton>
	);
}

export default SidebarMenuButton;
