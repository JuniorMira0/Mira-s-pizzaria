import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    'py-4 px-6 fixed w-full top-0 z-50 transition-all duration-300';
  const scrolledNavbarClasses = 'bg-white/60 backdrop-blur-lg shadow-md';
  const mobileOpenNavbarClasses = !scrolled ? 'bg-white shadow-sm' : '';
  const navbarClasses = `${baseNavbarClasses} ${
    scrolled
      ? scrolledNavbarClasses
      : isMobileMenuOpen
      ? mobileOpenNavbarClasses
      : 'bg-white shadow-sm'
  }`;

  const linkBaseClasses =
    'relative block md:inline-block py-2 md:py-0 uppercase text-xs tracking-tight font-medium text-black opacity-90 transition-colors duration-300';
  const linkHoverClasses = 'hover:text-[#ea1d2c] hover:opacity-100';
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
          className="text-5xl font-huglove text-black"
        >
          <span>Mira</span>
          <span className="text-[#ea1d2c]">'</span>
          <span>s.</span>
        </Link>
        <div className="md:hidden pr-4">
          {' '}
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
