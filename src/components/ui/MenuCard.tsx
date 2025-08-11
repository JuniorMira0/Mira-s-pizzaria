import React from 'react';
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
      className="block h-full"
    >
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
          <p className="text-2xl font-bold text-[#ea1d2c] mt-auto">
            {item.price}
          </p>
        </CardContent>
      </Card>
    </a>
  );
};

export default MenuCard;
