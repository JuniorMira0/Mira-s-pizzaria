import Navbar from '@/components/Navbar';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const Contato = () => {
  const phoneNumber = '4130144656';
  const whatsappDisplayNumber = '41 3014-4656';
  const whatsappRawNumber = '554130144656'; // VERIFIQUE ESTE NÚMERO
  const address = 'Joao Alencar Guimaraes 791, Santa Quiteria, Curitiba - PR';
  const googleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.182554101645!2d-49.31804488498586!3d-25.43220198378731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3c74a974f9b%3A0x497819dcf83967f7!2sR.%20Jo%C3%A3o%20Alencar%20Guimar%C3%A3es%2C%20791%20-%20Santa%20Quit%C3%A9ria%2C%20Curitiba%20-%20PR%2C%2080310-420!5e0!3m2!1spt-BR!2sbr!4v1678886400000!5m2!1spt-BR!2sbr'; // SUBSTITUA PELO SEU LINK DE EMBED AQUI
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`;

  const whatsappLink = `https://wa.me/${whatsappRawNumber}?text=Olá! Gostaria de mais informações.`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
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
                    <strong>Segunda a Domingo: </strong> 18:00 às 23:30
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaClock className="text-lg text-gray-500 flex-shrink-0 opacity-0" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 min-h-[300px] md:min-h-[400px]">
              {googleMapsEmbedUrl ? (
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Localização de ${"Mira's Pizzaria"}`}
                  className="min-h-[300px] md:min-h-[400px]"
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Mapa indisponível no momento.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
