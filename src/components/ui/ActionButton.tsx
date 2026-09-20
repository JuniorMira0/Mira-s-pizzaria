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
    'flex items-center justify-center space-x-3 px-8 py-4 rounded-full text-lg font-semibold transition-colors w-full md:w-auto';

  const variantClasses = {
    primary: 'bg-brand-red text-white hover:bg-brand-red-dark',
    secondary: 'bg-brand-dark text-white hover:bg-black',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#1ebe57]',
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
