import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const PromotionalCarousel = () => {
  const promotions = [
    {
      id: 1,
      title: 'Promo 1',
      imageDesktop: '/images/1.png',
      imageMobile: '/images/Banner1-mobile.png',
    },
    {
      id: 2,
      title: 'Promo 2',
      imageDesktop: '/images/2.png',
      imageMobile: '/images/Banner5-mobile.png',
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  const isMobile = useIsMobile();

  return (
    <Carousel
      className="w-full"
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={isMobile ? [plugin.current] : []}
    >
      <CarouselContent className="ml-0">
        {promotions.map((promo) => (
          <CarouselItem key={promo.id} className="basis-full p-0 pl-0">
            <img
              src={promo.imageDesktop}
              alt={promo.title}
              className="hidden md:block w-full h-auto"
            />
            <img
              src={promo.imageMobile}
              alt={promo.title}
              className="block md:hidden w-full h-auto"
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
