import { MessageClient, MessageServer } from '@atoms';

type MessageInteractionProps = {
	answer?: string;
	question: string;
};

function MessageInteraction({ answer, question }: MessageInteractionProps) {
	return (
		<div className="mb-12 flex flex-col gap-8">
			<div className="flex justify-end">
				<MessageClient message={question} />
			</div>
			<MessageServer message={answer} />
		</div>
	);
}

export default MessageInteraction;
