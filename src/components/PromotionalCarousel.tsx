import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { LINKS, BUSINESS_INFO, MENU_ITEMS } from '@/constants';

type Slide = {
  id: number;
  theme: 'dark' | 'cream' | 'red';
  kicker: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

const slides: Slide[] = [
  {
    id: 1,
    theme: 'dark',
    kicker: `DESDE ${BUSINESS_INFO.foundedYear}`,
    title: (
      <>
        Pizza artesanal,
        <br />
        direto no seu delivery
      </>
    ),
    description: BUSINESS_INFO.description,
    image: '/images/pizza-real-2.jpeg',
    imageAlt: 'Pizza artesanal da Mira’s Pizzaria, recém-saída do forno',
    primaryCta: { label: 'Peça pelo WhatsApp', href: LINKS.whatsappOrder },
    secondaryCta: { label: 'Ver cardápio', href: '#cardapio' },
  },
  {
    id: 2,
    theme: 'cream',
    kicker: 'CARDÁPIO',
    title: 'Sabores que conquistam',
    description:
      'Massa fermentada lentamente, molho artesanal e ingredientes selecionados todos os dias.',
    image: '/images/pizza-real-1.jpeg',
    imageAlt: 'Pizza artesanal da Mira’s Pizzaria',
    primaryCta: { label: 'Ver cardápio completo', href: '#cardapio' },
    secondaryCta: { label: 'Pedir agora', href: LINKS.orderOnline },
  },
  {
    id: 3,
    theme: 'red',
    kicker: 'AVALIAÇÃO 5 ESTRELAS',
    title: 'Aprovado por quem já pediu',
    description:
      '"Entrega rápida, embalagem excelente... tudo bom, muito aprovado." — Mário',
    image: '/images/pizza-real-margherita.webp',
    imageAlt: 'Pizza Margherita da Mira’s Pizzaria',
    primaryCta: { label: 'Fazer meu pedido', href: LINKS.whatsappOrder },
  },
];

const themeClasses: Record<Slide['theme'], { section: string; kicker: string; title: string; text: string }> = {
  dark: {
    section: 'bg-brand-dark',
    kicker: 'text-brand-gold',
    title: 'text-white',
    text: 'text-white/70',
  },
  cream: {
    section: 'bg-brand-cream',
    kicker: 'text-brand-red',
    title: 'text-brand-dark',
    text: 'text-brand-dark/70',
  },
  red: {
    section: 'bg-brand-red',
    kicker: 'text-white/80',
    title: 'text-white',
    text: 'text-white/85',
  },
};

const BannerSlide = ({ slide }: { slide: Slide }) => {
  const theme = themeClasses[slide.theme];
  const isExternal = (href: string) => href.startsWith('http');

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6 md:px-16 py-12 md:py-0 min-h-[460px] md:min-h-[520px] ${theme.section}`}
    >
      <div className="flex-1 text-center md:text-left max-w-xl">
        <span
          className={`text-sm font-bold uppercase tracking-widest ${theme.kicker}`}
        >
          {slide.kicker}
        </span>
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-4 leading-tight ${theme.title}`}
        >
          {slide.title}
        </h2>
        <p className={`text-base md:text-lg mb-8 ${theme.text}`}>
          {slide.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
          <a
            href={slide.primaryCta.href}
            {...(isExternal(slide.primaryCta.href)
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-dark shadow-sm transition-transform hover:scale-105"
          >
            <FaWhatsapp size={18} />
            {slide.primaryCta.label}
          </a>
          {slide.secondaryCta && (
            <a
              href={slide.secondaryCta.href}
              {...(isExternal(slide.secondaryCta.href)
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className={`inline-flex items-center gap-2 rounded-full border-2 px-7 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                slide.theme === 'cream'
                  ? 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
                  : 'border-white/70 text-white hover:bg-white/10'
              }`}
            >
              {slide.secondaryCta.label}
            </a>
          )}
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 sm:w-80 md:w-96 aspect-[4/5]">
          <div className="absolute inset-0 rounded-[2rem] bg-brand-gold/20 rotate-6" />
          <img
            src={slide.image}
            alt={slide.imageAlt}
            className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-2xl -rotate-2"
            loading={slide.id === 1 ? 'eager' : 'lazy'}
          />
        </div>
      </div>
    </div>
  );
};

const PromotionalCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{ align: 'start', loop: true }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="basis-full p-0 pl-0">
              <BannerSlide slide={slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex left-4 border-none bg-white/20 hover:bg-white/40 text-white" />
        <CarouselNext className="hidden md:inline-flex right-4 border-none bg-white/20 hover:bg-white/40 text-white" />
      </Carousel>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            aria-label={`Ir para o slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              selected === index ? 'w-6 bg-brand-gold' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionalCarousel;
