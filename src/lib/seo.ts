import { BUSINESS_INFO, CONTACT_INFO, LINKS } from '@/constants';

export const SITE_URL = 'https://miraspizzaria.com.br';

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export const toAbsoluteUrl = (pathOrUrl: string): string => {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl}`;
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS_INFO.name,
  url: SITE_URL,
  logo: `${SITE_URL}/images/miras-logo-preview.webp`,
  sameAs: ['https://www.instagram.com/miraspizzaria/', LINKS.whatsappContact],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+${CONTACT_INFO.whatsappNumber}`,
    contactType: 'customer service',
    areaServed: 'BR',
    availableLanguage: ['pt-BR'],
  },
} as const;

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BUSINESS_INFO.name,
  url: SITE_URL,
  inLanguage: 'pt-BR',
} as const;

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: BUSINESS_INFO.name,
  description: BUSINESS_INFO.description,
  url: SITE_URL,
  image: `${SITE_URL}/images/1.png`,
  telephone: `+${CONTACT_INFO.whatsappNumber}`,
  servesCuisine: ['Pizza'],
  priceRange: '$$',
  sameAs: ['https://www.instagram.com/miraspizzaria/', LINKS.whatsappContact],
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: CONTACT_INFO.address.city,
    addressRegion: CONTACT_INFO.address.state,
    postalCode: CONTACT_INFO.address.zipCode,
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '18:00',
      closes: '23:45',
    },
  ],
} as const;

export const createWebPageSchema = (
  title: string,
  description: string,
  path: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: toAbsoluteUrl(path),
  inLanguage: 'pt-BR',
  isPartOf: {
    '@type': 'WebSite',
    name: BUSINESS_INFO.name,
    url: SITE_URL,
  },
});

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});
