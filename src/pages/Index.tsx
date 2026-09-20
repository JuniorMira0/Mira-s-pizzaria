import PromotionalCarousel from '@/components/PromotionalCarousel';
import HighlightsBar from '@/components/HighlightsBar';
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
          href="/images/pizza-real-2.jpeg"
          type="image/jpeg"
        />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <section className="relative mt-20 overflow-hidden">
            <PromotionalCarousel />
          </section>

          <HighlightsBar />

          <MenuSection />

          <TestimonialsSection />

          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-sm font-bold uppercase tracking-widest text-brand-gold">
                  Onde estamos
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-brand-dark">
                  Nossa localização
                </h2>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
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
