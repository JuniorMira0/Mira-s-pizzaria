import Navbar from '@/components/Navbar';
import PromotionalCarousel from '@/components/PromotionalCarousel';
import MenuSection from '@/components/MenuSection';
import LocationMap from '@/components/LocationMap';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen md:h-[95vh]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-50" />
        </div>

        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-white">
          {/* Promotional Carousel */}
          <div className="w-full md:w-4/5 lg:w-3/4">
            <PromotionalCarousel />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* Location Section */}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
