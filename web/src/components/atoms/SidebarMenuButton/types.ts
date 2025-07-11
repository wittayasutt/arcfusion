import { type ReactNode } from 'react';

export type SidebarItemType = {
	id: string;
	icon?: ReactNode;
	label: string;
	onClick?: () => void;
	onClickRemove?: () => void;
};
