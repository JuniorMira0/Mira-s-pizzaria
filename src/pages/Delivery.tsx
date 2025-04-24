import { FaWhatsapp, FaPhoneAlt, FaLaptop } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Delivery = () => {
  const whatsappNumber = '554130144656';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um pedido.`;

  return (
    <>
      <Helmet>
        <title>
          Delivery de Pizza em Curitiba (Santa Quitéria) | Mira's Pizzaria
        </title>
        <meta
          name="description"
          content="Peça sua pizza artesanal favorita da Mira's Pizzaria pelo site, telefone ou WhatsApp! Delivery rápido em Santa Quitéria e região. Aberto todos os dias!"
        />
        <link rel="canonical" href="https://miraspizzaria.com.br/delivery" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-700">
              Peça sua Mira's em Casa!
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Receba sua pizza favorita quentinha e deliciosa no conforto do seu
              lar. Veja como pedir:
            </p>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-12">
              <h2 className="text-2xl font-semibold mb-8 text-gray-800">
                Escolha sua forma de pedir preferida:
              </h2>

              <div className="flex flex-col md:flex-row md:justify-center items-center space-y-6 md:space-y-0 md:space-x-6 mb-10">
                <a
                  href="https://pedido.anota.ai/loja/pizzaria-detroit-santa-quiteria?f=ms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-[#ea1d2c] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#d41924] transition-colors w-full md:w-auto"
                >
                  <FaLaptop className="text-xl" />
                  <span>Pedir pelo Site</span>
                </a>

                <a
                  href="tel:4130144656"
                  className="flex items-center justify-center space-x-3 bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-900 transition-colors w-full md:w-auto"
                >
                  <FaPhoneAlt className="text-xl" />
                  <span>Ligar: 41 3014-4656</span>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#128C7E] transition-colors w-full md:w-auto"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Pedir pelo WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-red-700">
                  Horário de Delivery
                </h3>
                <p className="text-gray-700">
                  <strong>Todos os dias:</strong> 18:00 às 23:45
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-red-700">
                  Área de Entrega
                </h3>
                <p className="text-gray-700 mb-2">
                  Atendemos os seguintes bairros: [Liste os bairros aqui ou
                  descreva a área].
                </p>
                <p className="text-gray-600 text-sm">
                  Taxa de entrega: Consulte no momento do pedido. <br />
                  Tempo médio: 40-60 minutos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
