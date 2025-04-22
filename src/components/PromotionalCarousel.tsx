import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
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
      imageDesktop: '/images/Banner1.webp',
      imageMobile: '/images/Banner1-mobile.webp',
    },
    {
      id: 2,
      title: 'Promo 2',
      imageDesktop: '/images/Banner5.webp',
      imageMobile: '/images/Banner5-mobile.webp',
    },
    {
      id: 3,
      title: 'Promo 3',
      imageDesktop: '/images/Banner3.webp',
      imageMobile: '/images/Banner3-mobile.webp',
    },
    {
      id: 4,
      title: 'Promo 4',
      imageDesktop: '/images/Banner4.webp',
      imageMobile: '/images/Banner4-mobile.webp',
    },
    {
      id: 5,
      title: 'Promo 5',
      imageDesktop: '/images/Banner2.webp',
      imageMobile: '/images/Banner2-mobile.webp',
    },
  ];

  const plugin = React.useRef(Autoplay({ delay: 5000 }));

  return (
    <Carousel
      className="w-full h-[65vh] md:h-[55vh]"
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent className="h-full">
        {promotions.map((promo) => (
          <CarouselItem
            key={promo.id}
            className="h-full p-0 basis-full overflow-hidden"
          >
            <img
              src={promo.imageDesktop}
              alt={promo.title}
              className="w-full h-full object-cover hidden md:block"
            />
            <img
              src={promo.imageMobile}
              alt={promo.title}
              className="w-full h-full object-cover block md:hidden"
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
