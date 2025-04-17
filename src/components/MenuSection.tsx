
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const MenuSection = () => {
  const isMobile = useIsMobile();
  
  const menuItems = [
    {
      id: 1,
      name: "Pizza Margherita",
      description: "Molho de tomate, mussarela, manjericão fresco",
      price: "R$ 45,90",
      image: "/pizza-margherita.jpg"
    },
    {
      id: 2,
      name: "Pizza Pepperoni",
      description: "Molho de tomate, mussarela, pepperoni",
      price: "R$ 49,90",
      image: "/pizza-pepperoni.jpg"
    },
    {
      id: 3,
      name: "Pizza 4 Queijos",
      description: "Mussarela, parmesão, provolone, gorgonzola",
      price: "R$ 52,90",
      image: "/pizza-4-queijos.jpg"
    },
    {
      id: 4,
      name: "Pizza Portuguesa",
      description: "Molho de tomate, mussarela, presunto, ovos, cebola, azeitonas",
      price: "R$ 54,90",
      image: "/pizza-portuguesa.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Cardápio</h2>
        {isMobile ? (
          <Carousel className="w-full">
            <CarouselContent>
              {menuItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <p className="text-2xl font-bold text-[#ea1d2c]">{item.price}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-2xl font-bold text-[#ea1d2c]">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
