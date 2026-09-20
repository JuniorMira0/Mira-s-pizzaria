import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LINKS } from '@/constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const baseNavbarClasses =
    'py-3 px-6 fixed w-full top-0 z-50 transition-all duration-300';
  const scrolledNavbarClasses = 'bg-white/85 backdrop-blur-lg shadow-md';
  const mobileOpenNavbarClasses = !scrolled ? 'bg-white shadow-sm' : '';
  const navbarClasses = `${baseNavbarClasses} ${
    scrolled
      ? scrolledNavbarClasses
      : isMobileMenuOpen
      ? mobileOpenNavbarClasses
      : 'bg-white/95 backdrop-blur-sm shadow-sm'
  }`;

  const linkBaseClasses =
    'relative block md:inline-block py-2 md:py-0 uppercase text-xs tracking-wide font-semibold text-brand-dark opacity-80 transition-colors duration-300';
  const linkHoverClasses = 'hover:text-brand-red hover:opacity-100';
  const linkClasses = `${linkBaseClasses} ${linkHoverClasses}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        <Link
          to="/"
          onClick={scrollToTop}
          className="text-5xl font-huglove text-brand-dark shrink-0"
        >
          <span>Mira</span>
          <span className="text-brand-red">'</span>
          <span>s.</span>
        </Link>
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={LINKS.whatsappOrder}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-red px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-brand-red-dark"
          >
            Peça já
          </a>
          <button
            onClick={toggleMobileMenu}
            aria-label="Abrir menu"
            className="text-brand-dark"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:space-x-8 mt-4 md:mt-0`}
        >
          <Link
            to="/sobre"
            className={linkClasses}
            onClick={() => {
              setIsMobileMenuOpen(false);
              scrollToTop();
            }}
          >
            {' '}
            SOBRE
          </Link>
          <a
            href="https://wa.me/554130144656"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            WHATSAPP
          </a>
          <a
            href="https://www.instagram.com/miraspizzaria/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
            onClick={() => {
              setIsMobileMenuOpen(false);
              scrollToTop();
            }}
          >
            INSTAGRAM
          </a>
          <Link
            to="/delivery"
            className={linkClasses}
            onClick={() => {
              setIsMobileMenuOpen(false);
              scrollToTop();
            }}
          >
            {' '}
            DELIVERY
          </Link>
          <Link
            to="/contato"
            className={linkClasses}
            onClick={() => {
              setIsMobileMenuOpen(false);
              scrollToTop();
            }}
          >
            {' '}
            CONTATO
          </Link>
          <a
            href={LINKS.whatsappOrder}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block rounded-full bg-brand-red px-5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-brand-red-dark"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Peça já
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
