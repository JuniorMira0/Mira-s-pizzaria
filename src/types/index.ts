// Tipos para o menu
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

// Tipos para informações de contato
export interface ContactInfo {
  whatsappNumber: string;
  phoneFormatted: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

// Tipos para links
export interface AppLinks {
  orderOnline: string;
  whatsappOrder: string;
  whatsappContact: string;
  phoneCall: string;
}

// Tipos para informações do negócio
export interface BusinessInfo {
  name: string;
  foundedYear: number;
  description: string;
  slogan: string;
}
