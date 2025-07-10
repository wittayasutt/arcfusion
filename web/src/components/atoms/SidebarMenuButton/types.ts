import { type ReactNode } from 'react';

export type SidebarItemType = {
	icon?: ReactNode;
	label: string;
	onClick?: () => void;
};
