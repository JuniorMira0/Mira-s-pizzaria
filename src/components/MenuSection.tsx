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
    <section
      id="cardapio"
      className="relative z-20 pt-14 pb-16 -mt-6 bg-gradient-to-b from-brand-cream to-white rounded-t-[2.5rem] shadow-[0_-12px_30px_-15px_rgba(0,0,0,0.15)] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-gold">
            Cardápio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-brand-dark">
            As favoritas da casa
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Massa artesanal, ingredientes frescos e aquele sabor de família em
            cada fatia.
          </p>
        </div>
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
