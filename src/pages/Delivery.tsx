import { FaWhatsapp, FaPhoneAlt, FaLaptop } from 'react-icons/fa';
import SEO from '@/components/SEO';
import { CONTACT_INFO, LINKS } from '@/constants';
import ActionButton from '@/components/ui/ActionButton';
import {
  createBreadcrumbSchema,
  createWebPageSchema,
  organizationSchema,
} from '@/lib/seo';

const Delivery = () => {
  const description =
    'Peça sua pizza artesanal favorita da Mira\'s Pizzaria pelo site, telefone ou WhatsApp. Delivery rápido em Santa Quitéria e região.';

  const structuredData = [
    organizationSchema,
    createWebPageSchema('Delivery de Pizza em Curitiba', description, '/delivery'),
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      { name: 'Delivery', path: '/delivery' },
    ]),
  ];

  return (
    <>
      <SEO
        title="Delivery de Pizza em Curitiba (Santa Quitéria)"
        description={description}
        canonical="/delivery"
        keywords="delivery, pizza, entrega, Santa Quitéria, Curitiba, WhatsApp, online"
        ogImage="/images/pizza-pepperoni.webp"
        structuredData={structuredData}
      />

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
                <ActionButton
                  href={LINKS.orderOnline}
                  icon={FaLaptop}
                  text="Pedir Online"
                  variant="primary"
                />

                <ActionButton
                  href={LINKS.phoneCall}
                  icon={FaPhoneAlt}
                  text={`Ligar: ${CONTACT_INFO.phoneFormatted}`}
                  variant="secondary"
                  external={false}
                />

                <ActionButton
                  href={LINKS.whatsappOrder}
                  icon={FaWhatsapp}
                  text="Pedir pelo WhatsApp"
                  variant="whatsapp"
                />
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
