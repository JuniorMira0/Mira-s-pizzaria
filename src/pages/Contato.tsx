import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';
import LocationMap from '@/components/LocationMap';
import SEO from '@/components/SEO';
import {
  createBreadcrumbSchema,
  createWebPageSchema,
  organizationSchema,
} from '@/lib/seo';

const Contato = () => {
  const phoneNumber = '4130144656';
  const whatsappDisplayNumber = '41 3014-4656';
  const whatsappRawNumber = '554130144656';
  const address = 'Joao Alencar Guimaraes 791, Santa Quiteria, Curitiba - PR';
  const description =
    'Endereço, telefone, WhatsApp e horário de funcionamento da Mira\'s Pizzaria em Curitiba. Fale conosco e peça seu delivery.';
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`;
  const whatsappLink = `https://wa.me/${whatsappRawNumber}?text=Olá! Gostaria de mais informações.`;
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contato - Mira\'s Pizzaria',
    url: 'https://miraspizzaria.com.br/contato',
    mainEntity: {
      '@type': 'Restaurant',
      name: "Mira's Pizzaria",
      telephone: `+${whatsappRawNumber}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'R. Joao Alencar Guimaraes, 791',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        postalCode: '80310-420',
        addressCountry: 'BR',
      },
    },
  };

  const structuredData = [
    organizationSchema,
    createWebPageSchema('Contato Mira\'s Pizzaria', description, '/contato'),
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      { name: 'Contato', path: '/contato' },
    ]),
    contactPageSchema,
  ];

  return (
    <>
      <SEO
        title="Contato e Localização | Mira's Pizzaria"
        description={description}
        canonical="/contato"
        keywords="contato pizzaria curitiba, telefone pizzaria, whatsapp pizzaria, endereco pizzaria santa quiteria"
        ogImage="/images/2.png"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-red-700">
              Fale Conosco ou Visite-nos
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="lg:col-span-1 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Informações de Contato
                </h2>
                <div className="space-y-5">
                  <div className="flex items-center space-x-3">
                    <FaPhoneAlt className="text-xl text-red-600 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <a
                        href={`tel:${phoneNumber}`}
                        className="hover:text-red-700 transition-colors"
                      >
                        {whatsappDisplayNumber}
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaWhatsapp className="text-xl text-green-600 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-700 transition-colors"
                      >
                        {whatsappDisplayNumber} (WhatsApp)
                      </a>
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-xl text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">
                      <a
                        href={googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 transition-colors"
                      >
                        {address}
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Horário de Funcionamento
                </h2>
                <div className="space-y-3 text-lg text-gray-700">
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-lg text-gray-500 flex-shrink-0" />
                    <span>
                      <strong>Todos os dias: </strong> 18:00 às 23:45
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-lg text-gray-500 flex-shrink-0 opacity-0" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 min-h-[300px] md:min-h-[450px]">
                <LocationMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
