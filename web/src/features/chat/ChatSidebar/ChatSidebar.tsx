import { SquarePen } from 'lucide-react';
import { Sidebar } from '@organisms';

import { useChatContext } from '../ChatContext';

type ChatSidebarProps = {
	className?: string;
};

function ChatSidebar({ className }: ChatSidebarProps) {
	const { chats, newChat, removeChat, selectChat } = useChatContext();

	const sidebarGroups = [
		{
			items: [
				{
					id: 'new-chat',
					icon: <SquarePen />,
					label: 'New chat',
					onClick: () => {
						newChat();
					},
				},
			],
		},
		{
			title: 'Chats',
			items: chats.map((chat) => ({
				id: chat.chat_id,
				label: chat.first_question,
				onClick: () => {
					selectChat(chat.chat_id);
				},
				onClickRemove: () => {
					removeChat(chat.chat_id);
				},
			})),
		},
	];

	return <Sidebar className={className} sidebarGroups={sidebarGroups} />;
}

export default ChatSidebar;
