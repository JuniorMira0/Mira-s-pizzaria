
import Navbar from "@/components/Navbar";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Sobre a Mira's Pizzaria</h1>
          <p className="text-lg mb-6">
            Bem-vindo à Mira's Pizzaria! Somos uma pizzaria tradicional dedicada a oferecer as melhores pizzas da região, com ingredientes frescos e de qualidade.
          </p>
          <p className="text-lg mb-6">
            Nossa missão é proporcionar momentos deliciosos para nossos clientes, através de sabores únicos e um atendimento excepcional.
          </p>
          <p className="text-lg">
            Venha nos conhecer e experimente nossas deliciosas pizzas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
