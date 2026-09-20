import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const testimonials = [
  {
    id: 1,
    customerName: 'jheniffer',
    comment: 'pizza extremamente saborosa!!.',
    rating: 5,
  },
  {
    id: 2,
    customerName: 'mário',
    comment:
      'Entrega rápida, embalagem excelente ( nunca vi)....tudo bom , muito aprovado.',
    rating: 5,
  },
  {
    id: 3,
    customerName: 'Karina',
    comment:
      'Primeira vez que pedi e fiquei muito satisfeita. A pizza estava deliciosa e chegou quentinha, vou pedir mais vezes.',
    rating: 5,
  },
  {
    id: 4,
    customerName: 'Fabiola',
    comment: 'Saborosa, quentinha, valor legal. RECOMENDO.',
    rating: 5,
  },
  {
    id: 5,
    customerName: 'Henrique',
    comment: 'Rapido e de qualidade muito boa',
    rating: 5,
  },
  {
    id: 6,
    customerName: 'Dânia',
    comment: 'Sempre ótimo',
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'fill-brand-gold text-brand-gold' : 'text-gray-300'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section className="py-16 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-gold">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-white">
            O que nossos clientes dizem
          </h2>
        </div>

        {isMobile ? (
          <Carousel
            className="w-full max-w-xs sm:max-w-sm mx-auto"
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[plugin.current]}
          >
            {' '}
            <CarouselContent>
              {testimonials.map((item) => (
                <CarouselItem key={item.id}>
                  <Card className="text-center h-full bg-white">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      <p className="text-gray-600 italic mb-4">
                        "{item.comment}"
                      </p>
                      <StarRating rating={item.rating} />
                      <h3 className="text-lg font-semibold mt-3 text-brand-dark">
                        {item.customerName}
                      </h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 border-none bg-white/10 text-white hover:bg-white/20" />{' '}
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 border-none bg-white/10 text-white hover:bg-white/20" />{' '}
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <Card key={item.id} className="text-center bg-white">
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <p className="text-gray-600 italic mb-4">"{item.comment}"</p>
                  <StarRating rating={item.rating} />
                  <h3 className="text-lg font-semibold mt-3 text-brand-dark">
                    {item.customerName}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
