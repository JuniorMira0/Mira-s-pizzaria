import Navbar from '@/components/Navbar';

const Delivery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Delivery</h1>

          <div className="max-w-2xl mx-auto">
            <p className="text-xl mb-8">
              Peça sua pizza pelo Site, telefone ou WhatsApp:
            </p>

            <div className="flex flex-col items-center space-y-6">
              <a
                href="https://pedido.anota.ai/loja/pizzaria-detroit-santa-quiteria?f=ms"
                className="bg-[#ea1d2c] text-white px-8 py-4 rounded-lg text-xl hover:bg-[#d41924] transition-colors"
              >
                {' '}
                Pedir pelo Site
              </a>
              <a
                href="tel:4130144656"
                className="bg-[#ea1d2c] text-white px-8 py-4 rounded-lg text-xl hover:bg-[#d41924] transition-colors"
              >
                Ligar: 41 3014-4656
              </a>

              <a
                href="https://wa.me/5541999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-xl hover:bg-[#128C7E] transition-colors"
              >
                Pedir pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
