import clsx from 'clsx';
import { X } from 'lucide-react';
import { useState } from 'react';

import { SidebarMenuButton as UiSidebarMenuButton } from '@ui/sidebar';

import { type SidebarItemType } from './types';

type SidebarMenuButtonProps = SidebarItemType;

function SidebarMenuButton({
	icon,
	label,
	onClick,
	onClickRemove,
}: SidebarMenuButtonProps) {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<UiSidebarMenuButton
			className="cursor-pointer"
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{icon}
			<span className="flex-1 truncate">{label}</span>
			{onClickRemove ? (
				<X
					className={clsx(
						'transition-opacity duration-200 ease-in',
						isHovered ? 'opacity-100' : 'opacity-0',
					)}
					onClick={onClickRemove}
				/>
			) : null}
		</UiSidebarMenuButton>
	);
}

export default SidebarMenuButton;
