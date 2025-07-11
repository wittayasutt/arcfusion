import { type ReactNode } from 'react';

import { SidebarToggle } from '@atoms';
import { Navbar, Sidebar } from '@organisms';
import { SidebarProvider } from '@ui/sidebar';

type ChatLayoutProps = {
	children?: ReactNode;
};

function ChatLayout({ children }: ChatLayoutProps) {
	return (
		<>
			<Sidebar className="z-20" />
			<main className="flex w-full flex-col">
				<Navbar
					className="fixed top-0 right-0 z-10"
					leftLabel={<SidebarToggle />}
				/>
				<div className="h-full pt-10">{children}</div>
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
