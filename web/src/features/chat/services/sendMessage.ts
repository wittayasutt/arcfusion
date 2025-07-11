import {
	useMutation,
	type UseMutationResult,
	useQueryClient,
} from '@tanstack/react-query';
import { axios } from '@/utils';

import {
	type ChatSendMessageResponseType,
	type ChatType,
	type MessageType,
} from '../types';

type sendMessageType = {
	chatId: string;
	question: string;
};

const sendMessage = async ({ chatId, question }: sendMessageType) => {
	// Add 3-second delay for testing purposes
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const { data } = await axios.post<ChatSendMessageResponseType>('/api/chat', {
		chat_id: chatId,
		question,
	});

	return data;
};

export const useChatSendMessage = (): UseMutationResult<
	ChatSendMessageResponseType,
	Error,
	sendMessageType
> => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: sendMessage,
		mutationKey: ['chat', 'sendMessage'],
		onMutate: async ({ chatId, question }) => {
			// Cancel any outgoing refetches
			await queryClient.cancelQueries({ queryKey: ['chat', chatId] });

			// Snapshot the previous value
			const previousChat = queryClient.getQueryData(['chat', chatId]);

			// Create optimistic message
			const optimisticMessage: MessageType = {
				id: `temp-${Date.now()}`,
				chat_id: chatId,
				question,
				answer: '',
				source: '',
				timestamp: new Date(),
			};

			// Optimistically update the chat
			queryClient.setQueryData(['chat', chatId], (prev: ChatType) => {
				if (!prev) return prev;
				return {
					...prev,
					messages: [...(prev.messages || []), optimisticMessage],
					message_count: (prev.message_count || 0) + 1,
				};
			});

			// Return context object with the snapshot
			return { previousChat, optimisticMessage };
		},
		onError: (err, variables, context) => {
			// If the mutation fails, use the context to roll back
			if (context?.previousChat) {
				queryClient.setQueryData(
					['chat', variables.chatId],
					context.previousChat,
				);
			}

			// TODO: Handle error
		},
		onSuccess: (data, variables, context) => {
			// Update the optimistic message with real data
			queryClient.setQueryData(['chat', variables.chatId], (prev: ChatType) => {
				if (!prev) return prev;

				const updatedMessages = prev.messages.map((msg: MessageType) =>
					msg.id === context?.optimisticMessage.id
						? {
								...msg,
								id: data.id,
								answer: data.answer,
								source: data.source,
								timestamp: data.timestamp,
							}
						: msg,
				);

				return {
					...prev,
					messages: updatedMessages,
				};
			});
		},
		onSettled: (data, error, variables) => {
			// Always refetch after error or success to ensure consistency
			queryClient.invalidateQueries({ queryKey: ['chat', variables.chatId] });
		},
	});
};
