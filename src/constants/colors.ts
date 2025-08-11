// Cores do tema da aplicação
export const COLORS = {
  primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#ea1d2c', // Cor principal da marca
    800: '#991b1b',
    900: '#7f1d1d',
  },
  secondary: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  success: {
    500: '#10b981',
    600: '#059669',
  },
  whatsapp: {
    light: '#25D366',
    dark: '#128C7E',
  }
} as const;

// Utilitário para acessar cores
export const getColor = (color: keyof typeof COLORS, shade?: number) => {
  if (shade && color in COLORS) {
    const colorObj = COLORS[color] as Record<number, string>;
    return colorObj[shade] || colorObj[500];
  }
  return COLORS[color as keyof typeof COLORS];
};
