import React from 'react';
import { ChefHat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { MenuItem } from '@/types';

interface MenuCardProps {
  item: MenuItem;
  href: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <Card className="overflow-hidden border-border/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden">
          {item.image ? (
            <div
              role="img"
              aria-label={item.name}
              style={{
                backgroundImage: `url("${item.image}")`,
                backgroundSize: item.imageZoom ?? 'cover',
                backgroundPosition: item.imagePosition ?? 'center',
              }}
              className="absolute inset-0 bg-no-repeat group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-cream to-brand-gold/20">
              <ChefHat className="text-brand-gold/70" size={40} />
            </div>
          )}
          <span className="absolute top-3 right-3 rounded-full bg-brand-red px-3 py-1 text-sm font-bold text-white shadow-sm">
            {item.price}
          </span>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-brand-dark">
            {item.name}
          </h3>
          <p className="text-muted-foreground mb-4 flex-grow text-sm">
            {item.description}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-red group-hover:gap-2 transition-all">
            Pedir agora <span aria-hidden>→</span>
          </span>
        </CardContent>
      </Card>
    </a>
  );
};

export default MenuCard;
