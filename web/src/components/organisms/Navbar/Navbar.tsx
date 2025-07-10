import clsx from 'clsx';
import { type ReactNode } from 'react';

import { DarkModeSwitch } from '@features/darkmode';

type NavbarProps = {
	className?: string;
	leftLabel?: ReactNode;
};

function Navbar({ leftLabel, className }: NavbarProps) {
	return (
		<nav
			className={clsx(
				'bg-background relative flex min-h-10 w-full items-center justify-between border-b px-2',
				className,
			)}
		>
			<div className="flex items-center gap-2">
				{leftLabel}
				<h2 className="font-bold">ArcFusion</h2>
			</div>
			<DarkModeSwitch />
		</nav>
	);
}

export default Navbar;
