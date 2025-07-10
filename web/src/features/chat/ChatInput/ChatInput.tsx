import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@ui/form';
import { Textarea } from '@/components/ui/textarea';

const FormSchema = z.object({
	message: z
		.string()
		.min(10, {
			message: 'Bio must be at least 10 characters.',
		})
		.max(160, {
			message: 'Bio must not be longer than 30 characters.',
		}),
});

export function ChatInput() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast('You submitted the following values', {
			description: (
				<pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
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
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}

export default ChatInput;
