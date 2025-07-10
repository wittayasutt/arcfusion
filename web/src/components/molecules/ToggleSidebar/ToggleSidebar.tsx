import { PanelLeft } from 'lucide-react';
import clsx from 'clsx';
import { useState, type ReactNode } from 'react';

type ToggleSidebarProps = {
	children?: ReactNode;
};

function ToggleSidebar({ children }: ToggleSidebarProps) {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div
			className={clsx(
				'bg-primary text-primary-foreground h-dvh',
				isOpen ? 'w-64 [max-width:calc(100dvw-1rem)]' : 'w-10',
			)}
		>
			<div className="border-primary-foreground flex min-h-10 justify-end border-b">
				<div
					className="flex min-h-full w-10 cursor-pointer items-center justify-center"
					onClick={handleToggle}
				>
					<PanelLeft className="h-5 w-5" />
				</div>
			</div>
			{children}
		</div>
	);
}

export default ToggleSidebar;
