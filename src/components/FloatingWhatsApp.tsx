import { FaWhatsapp } from 'react-icons/fa';
import { LINKS } from '@/constants';

const FloatingWhatsApp = () => {
  return (
    <a
      href={LINKS.whatsappOrder}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Peça pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
      <FaWhatsapp size={28} className="relative" />
    </a>
  );
};

export default FloatingWhatsApp;
