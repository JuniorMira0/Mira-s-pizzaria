import { Flame, Leaf, Star, Timer } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Timer,
    title: 'Entrega rápida',
    description: 'Direto na sua porta',
  },
  {
    icon: Flame,
    title: 'Feita na hora',
    description: 'Sempre quentinha',
  },
  {
    icon: Leaf,
    title: 'Ingredientes frescos',
    description: 'Qualidade em cada fatia',
  },
  {
    icon: Star,
    title: 'Nota 5 estrelas',
    description: 'Aprovado pelos clientes',
  },
];

const HighlightsBar = () => {
  return (
    <section className="relative z-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-center gap-3 text-white"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-dark">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-sm font-bold leading-tight">{title}</p>
                <p className="text-xs text-white/60 leading-tight">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsBar;
