import { type ReactNode } from 'react';

import { DarkModeSwitch } from '@features/darkmode';

type NavbarProps = {
	leftLabel?: ReactNode;
};

function Navbar({ leftLabel }: NavbarProps) {
	return (
		<nav className="bg-primary-foreground flex min-h-10 w-full items-center justify-between border-b px-2">
			<div className="flex items-center gap-2">
				{leftLabel}
				<h2 className="font-bold">ArcFusion</h2>
			</div>
			<DarkModeSwitch />
		</nav>
	);
}

export default Navbar;
