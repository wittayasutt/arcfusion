import { CarouselItem as UiCarouselItem } from '@ui/carousel';
import { cn } from '@/lib/utils';

type ItemsPerView = 1 | 2 | 3 | 4 | 5 | 6;

type CarouselMessageProps = {
	message: string;
	itemsPerView?: ItemsPerView;
};

function CarouselItem({ message, itemsPerView = 1 }: CarouselMessageProps) {
	const getBasisClass = (items: ItemsPerView) => {
		const basisMap: Record<ItemsPerView, string> = {
			1: 'basis-full',
			2: 'basis-1/2',
			3: 'basis-1/3',
			4: 'basis-1/4',
			5: 'basis-1/5',
			6: 'basis-1/6',
		};

		return basisMap[items];
	};

	return (
		<UiCarouselItem
			className={cn(
				'bg-input/30 max-h-20 overflow-hidden rounded-md border px-3 py-2',
				getBasisClass(itemsPerView),
			)}
		>
			<p className="text-muted-foreground line-clamp-3 text-sm">{message}</p>
		</UiCarouselItem>
	);
}

export default CarouselItem;
