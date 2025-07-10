import { FileUp, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { Carousel } from '@molecules';
import { Button } from '@ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@ui/form';
import { Textarea } from '@ui/textarea';

const FormSchema = z.object({
	message: z.string().optional(),
});

//  TODO: Remove this mock messages
const mockMessages = [
	{
		id: '1',
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
	},
	{ id: '2', message: "What's the best way to handle state management?" },
	{ id: '3', message: 'Can you explain useEffect hooks?' },
	{ id: '4', message: 'How do I implement authentication?' },
	{ id: '5', message: 'What are the latest JavaScript features?' },
];

export function ChatInput() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		if (!data.message?.trim()) {
			return;
		}

		toast('You submitted the following values', {
			description: (
				<pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			form.handleSubmit(onSubmit)();
		}
	}

	return (
		<>
			{mockMessages.length > 0 ? (
				<div className="mb-2">
					<h3 className="text-muted-foreground mb-2 text-sm">
						Recent PDF files
					</h3>
					<Carousel messages={mockMessages} />
				</div>
			) : null}
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
						<Button className="cursor-pointer" type="submit" size="sm">
							<Send /> Send
						</Button>
					</div>
				</form>
			</Form>
		</>
	);
}

export default ChatInput;
