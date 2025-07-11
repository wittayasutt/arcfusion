import { PanelLeftIcon } from 'lucide-react';

import { useSidebar } from '@ui/sidebar';

function SidebarToggle() {
	const { toggleSidebar } = useSidebar();

	return (
		<PanelLeftIcon
			className="size-5 w-10 cursor-pointer"
			onClick={toggleSidebar}
		/>
	);
}

export default SidebarToggle;
