import { PanelLeftIcon } from 'lucide-react';
import { type ReactNode } from 'react';

import { SidebarProvider, useSidebar } from '@ui/sidebar';
import { Navbar, Sidebar } from '@organisms';

type ChatLayoutProps = {
	children?: ReactNode;
};

function ChatLayout({ children }: ChatLayoutProps) {
	const { toggleSidebar } = useSidebar();

	return (
		<>
			<Sidebar />
			<main className="flex w-full flex-col">
				<Navbar
					className="sticky top-0 z-10"
					leftLabel={
						<PanelLeftIcon
							className="size-5 cursor-pointer"
							onClick={toggleSidebar}
						/>
					}
				/>
				{children}
			</main>
		</>
	);
}

function ChatLayoutWrapper(props: ChatLayoutProps) {
	return (
		<SidebarProvider>
			<ChatLayout {...props} />
		</SidebarProvider>
	);
}

export default ChatLayoutWrapper;
