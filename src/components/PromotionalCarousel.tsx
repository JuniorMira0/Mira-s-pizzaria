import React from 'react'; // Import React for useRef
import Autoplay from 'embla-carousel-autoplay'; // Import the Autoplay plugin
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const PromotionalCarousel = () => {
  const promotions = [
    {
      id: 1,
      title: 'Promo 1',
      image: '/images/Banner1.png',
    },
    {
      id: 2,
      title: 'Promo 2',
      image: '/images/Banner5.png',
    },
    {
      id: 3,
      title: 'Promo 3',
      image: '/images/Banner3.png',
    },
    {
      id: 4,
      title: 'Promo 4',
      image: '/images/Banner4.png',
    },
    {
      id: 5,
      title: 'Promo 5',
      image: '/images/Banner2.png',
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      className="w-full h-full"
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-full">
        {promotions.map((promo) => (
          <CarouselItem key={promo.id} className="h-full p-0 basis-full">
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white border-none" />
      <CarouselNext className="hidden md:inline-flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white border-none" />
    </Carousel>
  );
};

export default PromotionalCarousel;
