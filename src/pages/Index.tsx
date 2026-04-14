import PromotionalCarousel from '@/components/PromotionalCarousel';
import MenuSection from '@/components/MenuSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationMap from '@/components/LocationMap';
import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import {
  createBreadcrumbSchema,
  createWebPageSchema,
  organizationSchema,
  restaurantSchema,
  websiteSchema,
} from '@/lib/seo';

const homeDescription =
  'Pizzaria em Curitiba (Santa Quitéria) com pizzas artesanais, ingredientes frescos e delivery rápido todos os dias.';

const homeStructuredData = [
  websiteSchema,
  organizationSchema,
  restaurantSchema,
  createWebPageSchema(
    "Mira's Pizzaria - Delivery de Pizzas Artesanais em Curitiba",
    homeDescription,
    '/',
  ),
  createBreadcrumbSchema([{ name: 'Inicio', path: '/' }]),
];

const Index = () => {
  return (
    <>
      <SEO
        title="Mira's Pizzaria - Delivery de Pizzas Artesanais em Curitiba"
        description={homeDescription}
        canonical="/"
        keywords="pizzaria curitiba, pizza artesanal, delivery santa quiteria, pedir pizza online, miras pizzaria"
        ogImage="/images/1.png"
        structuredData={homeStructuredData}
      />

      <Helmet>
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/images/1.png"
          type="image/png"
        />
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/images/Banner1-mobile.png"
          type="image/png"
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
