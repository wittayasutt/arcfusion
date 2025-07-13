import { Carousel, CarouselContent } from '@ui/carousel';
import { CarouselMessage } from '@atoms';

import { type CarouselMessageType } from './types';

type CarouselMessagesProps = {
	messages: CarouselMessageType[];
};

function CarouselMessages({ messages }: CarouselMessagesProps) {
	return (
		<Carousel className="cursor-pointer">
			<CarouselContent className="ml-0 gap-2">
				{messages.map((message) => (
					<CarouselMessage
						itemsPerView={3}
						message={message.message}
						key={message.id}
					/>
				))}
			</CarouselContent>
		</Carousel>
	);
}

export default CarouselMessages;
