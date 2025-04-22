import Navbar from '@/components/Navbar';
import { Helmet } from 'react-helmet-async';

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>
          Sobre Nós | Mira's Pizzaria - Tradição e Sabor em Curitiba
        </title>
        <meta
          name="description"
          content="Descubra a história e a paixão da Mira's Pizzaria por ingredientes frescos e pizzas artesanais. Localizada em Santa Quitéria, Curitiba, desde 2022."
        />
        <link rel="canonical" href="https://miraspizzaria.com.br/sobre" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="relative h-64 md:h-96 w-full">
          <img
            src="/images/pizzaria-interior.jpg"
            alt="Ambiente interno da Mira's Pizzaria"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
              Sobre a Mira's Pizzaria
            </h1>
          </div>
        </div>

        <div className="py-16 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-red-700">
                  Nossa Paixão por Pizza
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Bem-vindo à Mira's Pizzaria! Desde 2022, somos dedicados a
                  oferecer as melhores pizzas da região, combinando receitas
                  tradicionais com um toque de criatividade.
                </p>
                <p className="text-lg text-gray-700">
                  Nossa história é construída sobre a base de ingredientes
                  frescos, massa artesanal e um amor genuíno por reunir pessoas
                  ao redor de uma boa mesa.
                </p>
              </div>
              <div>
                <img
                  src="/images/pizza-margherita.png"
                  alt="Pizza Margherita deliciosa da Mira's"
                  className="rounded-lg shadow-lg w-full max-h-80 object-cover h-auto"
                />
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-semibold mb-10 text-red-700">
                Por que escolher a Mira's?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">
                    Ingredientes Frescos
                  </h3>
                  <p className="text-gray-600">
                    Selecionamos rigorosamente os melhores e mais frescos
                    ingredientes para garantir o sabor autêntico.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">
                    Atendimento Excepcional
                  </h3>
                  <p className="text-gray-600">
                    Nossa missão é proporcionar momentos deliciosos com um
                    serviço amigável e eficiente.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">
                    Ambiente Acolhedor
                  </h3>
                  <p className="text-gray-600">
                    Criamos um espaço perfeito para você desfrutar com amigos e
                    família.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center bg-red-700 text-white py-12 px-6 rounded-lg">
              <h2 className="text-3xl font-semibold mb-4">
                Experimente Nossas Delícias!
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Seja no nosso salão, pelo delivery ou retirando no balcão, temos
                a pizza perfeita esperando por você.
              </p>
              <a
                href="https://pedido.anota.ai/loja/pizzaria-detroit-santa-quiteria?f=msg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-red-700 font-bold py-3 px-8 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
              >
                Ver Cardápio
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
