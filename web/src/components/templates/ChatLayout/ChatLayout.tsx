import { Navbar, ToggleSidebar } from '@organisms';

type ChatLayoutProps = {
	children?: ReactNode;
};

function ChatLayout({ children }: ChatLayoutProps) {
	return (
		<div className="flex">
			<ToggleSidebar />
			<div className="flex flex-col w-full">
				<Navbar />
				{children}
			</div>
		</div>
	);
}

export default ChatLayout;
