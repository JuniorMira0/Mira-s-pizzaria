import Navbar from '@/components/Navbar';
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

      <div className="min-h-screen">
        <Navbar />

        <section className="relative md:h-[95vh] mt-20 md:mt-0">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gray-50" />
          </div>
          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-white">
            <div className="w-full md:w-4/5 lg:w-3/4">
              <PromotionalCarousel />
            </div>
          </div>
        </section>

        <MenuSection />

        <TestimonialsSection />

        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Nossa Localização
            </h2>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <LocationMap />
            </div>
            <div className="text-center mt-8">
              <p className="text-xl">
                Endereço: Joao alencar guimarães 791 - Santa quiteria
              </p>
              <p>Miras Pizzaria LTDA - 13.650.975/0001-07 </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
