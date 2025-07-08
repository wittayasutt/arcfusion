import { DarkModeSwitch } from '@features/darkmode';

function Navbar() {
	return (
		<div className="flex h-10 w-full items-center justify-end border-b border-gray-300 pr-2">
			<DarkModeSwitch />
		</div>
	);
}

export default Navbar;
