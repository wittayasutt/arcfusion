import { FileUp, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@ui/form';
import { Textarea } from '@ui/textarea';

import { useChatContext } from '../ChatContext';

const FormSchema = z.object({
	message: z.string().optional(),
	files: z.array(z.instanceof(File)).optional(),
});

export function ChatInputForm() {
	const { sendMessage, isLoading, uploadFile } = useChatContext();
	const fileInputRef = useRef<HTMLInputElement>(null);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const handleSubmitFiles = async (data: z.infer<typeof FormSchema>) => {
		if (!data.files) return;

		try {
			await uploadFile(data.files);
			form.reset({ files: [] });
		} catch (error) {
			console.error('Error submitting files:', error);
		}
	};

	const handleSubmitMessage = async (data: z.infer<typeof FormSchema>) => {
		if (!data.message) return;

		try {
			const message = data.message;
			form.reset({ message: '' });
			await sendMessage(message);
		} catch (error) {
			console.error('Error submitting message:', error);
		}
	};

	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		if (isLoading) {
			return;
		} else if (data.files?.length && data.files.length > 0) {
			handleSubmitFiles(data);
		} else if (data.message?.trim()) {
			console.log('data.message?.trim()', data.message?.trim());
			handleSubmitMessage(data);
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			form.handleSubmit(onSubmit)();
		}
	};

	const handleFileUpload = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(event.target.files || []);
		const pdfFiles = files.filter((file) => file.type === 'application/pdf');

		if (pdfFiles.length === 0) {
			toast('Please select PDF files only.');
			event.target.value = '';
			return;
		}

		form.setValue('files', pdfFiles);
		form.handleSubmit(onSubmit)();
	};

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
					<Button
						className="cursor-pointer"
						variant="outline"
						size="sm"
						type="button"
						disabled={isLoading}
						onClick={handleFileUpload}
					>
						<FileUp /> Upload PDFs
					</Button>
					<input
						ref={fileInputRef}
						type="file"
						accept=".pdf"
						multiple
						onChange={handleFileChange}
						style={{ display: 'none' }}
					/>
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
