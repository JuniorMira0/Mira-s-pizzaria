import PromotionalCarousel from '@/components/PromotionalCarousel';
import MenuSection from '@/components/MenuSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationMap from '@/components/LocationMap';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Mira's Pizzaria - Delivery de Pizzas Artesanais em Curitiba
        </title>
        <meta
          name="description"
          content="Peça as melhores pizzas artesanais de Curitiba (Santa Quitéria) com ingredientes frescos! Delivery rápido. Consulte nosso cardápio e peça já!"
        />
        <link rel="canonical" href="https://miraspizzaria.com.br/" />
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/images/Banner1.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/images/Banner1-mobile.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/images/pizza-margherita.webp"
          type="image/webp"
        />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <section className="relative mt-20 bg-gray-50">
            <div className="relative z-10 w-full text-white">
              <PromotionalCarousel />
            </div>
          </section>

          <MenuSection />

          <TestimonialsSection />

          <section className="bg-white pb-8">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">
                Nossa Localização
              </h2>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <LocationMap />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Index;
