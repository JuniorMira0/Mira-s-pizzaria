import Navbar from '@/components/Navbar';

const Contato = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contato</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Informações de Contato
              </h2>
              <p className="text-lg mb-4">
                <strong>Telefone:</strong>{' '}
                <a
                  href="tel:4130144656"
                  className="text-[#ea1d2c] hover:text-[#ffc107]"
                >
                  41 3014-4656
                </a>
              </p>
              <p className="text-lg mb-4">
                <strong>WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/5541999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ea1d2c] hover:text-[#ffc107]"
                >
                  Enviar mensagem
                </a>
              </p>
              <p className="text-lg">
                <strong>Endereço:</strong> Joao alencar guimarães 791 - Santa
                quiteria
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Horário de Funcionamento
              </h2>
              <p className="text-lg mb-2">Segunda a Sexta: 18h às 23:30h</p>
              <p className="text-lg mb-2">Sábado: 18h às 23:30h</p>
              <p className="text-lg">Domingo: 18h às 23:30h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
