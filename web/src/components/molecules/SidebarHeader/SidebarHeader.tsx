import { SidebarToggle } from '@atoms';

function SidebarHeader() {
	return (
		<div className="flex min-h-10 items-center justify-end border-b">
			<SidebarToggle />
		</div>
	);
}

export default SidebarHeader;
