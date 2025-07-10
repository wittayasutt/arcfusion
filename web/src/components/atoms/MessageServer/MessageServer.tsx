import { LoaderCircle } from 'lucide-react';

type MessageServerProps = {
	message?: string;
};

function MessageServer({ message }: MessageServerProps) {
	if (!message) {
		return <LoaderCircle className="animate-spin" />;
	}

	return <p>{message}</p>;
}

export default MessageServer;
