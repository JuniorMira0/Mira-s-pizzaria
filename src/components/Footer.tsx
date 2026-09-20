import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { LINKS, BUSINESS_INFO } from '@/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-gray-400 mt-auto">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-xl font-extrabold text-white">
              Com fome? Peça agora mesmo!
            </p>
            <p className="text-sm text-gray-400">
              Entrega rápida em Santa Quitéria e região.
            </p>
          </div>
          <a
            href={LINKS.whatsappOrder}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-brand-red-dark"
          >
            <FaWhatsapp size={18} />
            Peça pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-sm">
          <div>
            <h3 className="text-base font-semibold text-brand-gold mb-3">
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
            <h3 className="text-base font-semibold text-brand-gold mb-3">
              Onde Estamos
            </h3>
            <address className="not-italic space-y-1.5">
              <p>Rua João Alencar Guimarães, 791</p>
              <p>Santa Quitéria, Curitiba - PR</p>
              <p>CEP: 80310-420</p>
              <a
                href={LINKS.whatsappOrder}
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
            <h3 className="text-base font-semibold text-brand-gold mb-3">
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
            <h3 className="text-base font-semibold text-brand-gold mt-4 mb-3">
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

        <hr className="border-white/10 my-4" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex items-center gap-3 text-center md:text-left mb-3 md:mb-0">
            <img
              src="/images/miras-logo.png"
              alt=""
              aria-hidden="true"
              className="h-12 w-auto shrink-0"
            />
            <div>
              <p>&copy; {currentYear} Miras Pizzaria LTDA.</p>
              <p>CNPJ: 13.650.975/0001-07</p>
              <p>Todos os direitos reservados.</p>
            </div>
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
