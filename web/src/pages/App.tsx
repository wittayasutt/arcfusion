import { ChatContent, ChatLayout } from '@components';
import { ChatProvider } from '@features/chat/ChatContext';

function App() {
	return (
		<ChatProvider>
			<ChatLayout>
				<ChatContent />
			</ChatLayout>
		</ChatProvider>
	);
}

export default App;
