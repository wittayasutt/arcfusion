import { DarkModeSwitch } from '@features/darkmode';

function Navbar() {
	return (
		<div className="flex min-h-10 w-full items-center justify-between border-b border-gray-300 bg-white px-2 dark:bg-black">
			<h2 className="text-lg font-bold text-black dark:text-white">
				ArcFusion
			</h2>
			<DarkModeSwitch />
		</div>
	);
}

export default Navbar;
