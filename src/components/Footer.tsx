import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '554130144656';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Vim do site e gostaria de fazer um pedido.`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-sm">
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              Navegação
            </h3>
            <nav className="flex flex-col space-y-1.5">
              <Link
                to="/"
                onClick={scrollToTop}
                className="hover:text-white hover:underline"
              >
                Início
              </Link>
              <Link
                to="/sobre"
                onClick={scrollToTop}
                className="hover:text-white hover:underline"
              >
                Sobre Nós
              </Link>
              <Link
                to="/contato"
                onClick={scrollToTop}
                className="hover:text-white hover:underline"
              >
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              Onde Estamos
            </h3>
            <address className="not-italic space-y-1.5">
              <p>Rua João Alencar Guimarães, 791</p>
              <p>Santa Quitéria, Curitiba - PR</p>
              <p>CEP: 80310-420</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 pt-1 hover:text-white"
                aria-label="Entre em contato pelo WhatsApp"
              >
                <FaWhatsapp size={16} />
                <span>Chame no WhatsApp</span>
              </a>
            </address>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              Siga-nos
            </h3>
            <nav className="flex flex-col space-y-1.5">
              <a
                href="https://instagram.com/miraspizzaria"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                Instagram
              </a>
            </nav>
            <h3 className="text-base font-semibold text-white mt-4 mb-3">
              Legal
            </h3>
            <nav className="flex flex-col space-y-1.5">
              <Link
                to="/politica-privacidade"
                onClick={scrollToTop}
                aria-label="Política de Privacidade"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos-servico"
                onClick={scrollToTop}
                aria-label="Termos de Serviço"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                Termos de Serviço
              </Link>
            </nav>
          </div>
        </div>

        <hr className="border-gray-700 my-4" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="text-center md:text-left mb-3 md:mb-0">
            <p>&copy; {currentYear} Miras Pizzaria LTDA.</p>
            <p>CNPJ: 13.650.975/0001-07</p>
            <p>Todos os direitos reservados.</p>
          </div>
          <div className="text-center md:text-right">
            <p>Desenvolvido por Junior Mira</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
