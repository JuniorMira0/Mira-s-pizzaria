import { CONTACT_INFO, LINKS, BUSINESS_INFO } from '@/constants';

/**
 * Hook que retorna todas as informações de contato e negócio da aplicação
 */
export const useBusinessInfo = () => {
  return {
    contact: CONTACT_INFO,
    links: LINKS,
    business: BUSINESS_INFO,
  };
};

/**
 * Hook específico para informações de contato
 */
export const useContactInfo = () => {
  return {
    ...CONTACT_INFO,
    whatsappOrderLink: LINKS.whatsappOrder,
    whatsappContactLink: LINKS.whatsappContact,
    phoneCallLink: LINKS.phoneCall,
    orderOnlineLink: LINKS.orderOnline,
  };
};
