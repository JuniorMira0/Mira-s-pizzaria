// Constantes da aplicação
export const CONTACT_INFO = {
  whatsappNumber: '554130144656',
  phoneFormatted: '(41) 3014-4656',
  email: 'contato@miraspizzaria.com.br',
  address: {
    street: 'R. João Alencar Guimarães, 791',
    neighborhood: 'Santa Quitéria',
    city: 'Curitiba',
    state: 'PR',
    zipCode: '80310-420'
  }
} as const;

export const LINKS = {
  orderOnline: 'https://miraspizzaria.pedido.app.br/',
  whatsappOrder: `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Olá! Vim do site e gostaria de fazer um pedido.`,
  whatsappContact: `https://wa.me/${CONTACT_INFO.whatsappNumber}`,
  phoneCall: `tel:${CONTACT_INFO.whatsappNumber.slice(2)}`
} as const;

export const BUSINESS_INFO = {
  name: "Mira's Pizzaria",
  foundedYear: 2022,
  description: "Pizzas artesanais com ingredientes frescos e tradição familiar",
  slogan: "Tradição e Sabor em Curitiba"
} as const;

export const MENU_ITEMS = [
  {
    id: 1,
    name: 'Pizza Margherita',
    description: 'Delicioso molho de tomate, mussarela, tomates em rodelas, manjericão fresco e oregano',
    price: 'R$ 45,00',
    image: '/images/pizza-margherita.webp',
    category: 'pizza'
  },
  {
    id: 2,
    name: 'Pizza Pepperoni',
    description: 'Delicioso molho de tomate, mussarela, pepperone e orégano',
    price: 'R$ 48,00',
    image: '/images/pizza-pepperoni.webp',
    category: 'pizza'
  },
  {
    id: 3,
    name: 'Pizza 4 Queijos',
    description: 'Delicioso molho de tomate, mussarela, requeijão cremoso, provolone, gorgonzola e orégano',
    price: 'R$ 48,00',
    image: '/images/pizza-4-queijos.webp',
    category: 'pizza'
  },
  {
    id: 4,
    name: 'Pizza Portuguesa',
    description: 'Delicioso molho de tomate, mussarela, presunto, ovos, cebola azeitona e orégano',
    price: 'R$ 45,00',
    image: '/images/pizza-portuguesa.webp',
    category: 'pizza'
  }
] as const;
