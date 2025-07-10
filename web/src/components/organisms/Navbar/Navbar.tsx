import { DarkModeSwitch } from '@features/darkmode';

function Navbar() {
	return (
		<nav className="bg-primary-foreground flex min-h-10 w-full items-center justify-between border-b px-2">
			<h2 className="text-lg font-bold">ArcFusion</h2>
			<DarkModeSwitch />
		</nav>
	);
}

export default Navbar;
