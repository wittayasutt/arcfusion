import { ViewVerticalIcon } from '@radix-ui/react-icons';
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
				'h-dvh [max-width:calc(100dvw-1rem)] bg-blue-800',
				isOpen ? 'w-64' : 'w-10',
			)}
		>
			<div className="flex justify-end">
				<div
					className="flex h-10 w-10 cursor-pointer items-center justify-center"
					onClick={handleToggle}
				>
					<ViewVerticalIcon className="h-5 w-5 text-white" />
				</div>
			</div>
			{children}
		</div>
	);
}

export default ToggleSidebar;
