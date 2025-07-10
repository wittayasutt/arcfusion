import { CarouselItem as UiCarouselItem } from '@ui/carousel';

type CarouselMessageProps = {
	message: string;
};

function CarouselItem({ message }: CarouselMessageProps) {
	return (
		<UiCarouselItem className="bg-input/30 max-h-20 basis-1/3 overflow-hidden rounded-md border px-3 py-2">
			<p className="text-muted-foreground line-clamp-3 text-sm">{message}</p>
		</UiCarouselItem>
	);
}

export default CarouselItem;
