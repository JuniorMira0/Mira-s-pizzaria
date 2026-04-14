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
import { LINKS, MENU_ITEMS } from '@/constants';
import MenuCard from '@/components/ui/MenuCard';

const MenuSection = () => {
  const isMobile = useIsMobile();
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  return (
    <section className="relative z-20 pt-8 pb-16 -mt-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Cardápio</h2>
        {isMobile ? (
          <Carousel
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[plugin.current]}
          >
            <CarouselContent>
              {MENU_ITEMS.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <MenuCard item={item} href={LINKS.orderOnline} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MENU_ITEMS.map((item) => (
              <MenuCard key={item.id} item={item} href={LINKS.orderOnline} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
