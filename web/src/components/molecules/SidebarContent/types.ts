import { type SidebarItemType } from '@atoms/SidebarMenuButton';

export type SidebarGroupType = {
	activeItemId?: string | null;
	items: SidebarItemType[];
	title?: string;
};
