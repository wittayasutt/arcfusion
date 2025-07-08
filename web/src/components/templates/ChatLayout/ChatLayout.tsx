import { Navbar, Sidebar } from '@organisms';

type ChatLayoutProps = {
	children?: ReactNode;
};

function ChatLayout({ children }: ChatLayoutProps) {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex w-full flex-col">
				<Navbar />
				{children}
			</div>
		</div>
	);
}

export default ChatLayout;
