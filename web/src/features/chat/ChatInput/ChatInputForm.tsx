import { FileUp, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@ui/form';
import { Textarea } from '@ui/textarea';

import { useChatContext } from '../ChatContext';

const FormSchema = z.object({
	message: z.string().optional(),
});

export function ChatInputForm() {
	const { sendMessage, isLoading } = useChatContext();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		if (!data.message?.trim()) {
			return;
		}

		try {
			const sendingMessage = data.message.trim();
			form.reset({ message: '' });
			await sendMessage(sendingMessage);
		} catch (error) {
			console.error('Error submitting message:', error);
		}
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			form.handleSubmit(onSubmit)();
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									placeholder="Ask anything"
									className="max-h-[25vh] resize-none overflow-y-auto"
									onKeyDown={handleKeyDown}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="mt-2 flex items-center justify-between">
					<Button className="cursor-pointer" variant="outline" size="sm">
						<FileUp /> Upload PDF
					</Button>
					<Button
						className="cursor-pointer"
						type="submit"
						size="sm"
						disabled={isLoading}
					>
						<Send /> Send
					</Button>
				</div>
			</form>
		</Form>
	);
}

export default ChatInputForm;
