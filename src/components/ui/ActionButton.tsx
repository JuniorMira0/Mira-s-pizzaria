import React from 'react';
import { IconType } from 'react-icons';

interface ActionButtonProps {
  href: string;
  icon: IconType;
  text: string;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  className?: string;
  external?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  href,
  icon: Icon,
  text,
  variant = 'primary',
  className = '',
  external = true,
}) => {
  const baseClasses =
    'flex items-center justify-center space-x-3 px-8 py-4 rounded-lg text-lg font-medium transition-colors w-full md:w-auto';

  const variantClasses = {
    primary: 'bg-[#ea1d2c] text-white hover:bg-[#d41924]',
    secondary: 'bg-gray-700 text-white hover:bg-gray-900',
    whatsapp: 'bg-green-500 text-white hover:bg-green-600',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a href={href} className={combinedClasses} {...linkProps}>
      <Icon className="text-xl" />
      <span>{text}</span>
    </a>
  );
};

export default ActionButton;
