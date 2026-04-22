import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dr: {
          royal: '#2D3192',
          navy: '#1B357A',
          sky: '#7ECDEE',
          white: '#FFFFFF',
          cream: '#F4F1EB',
          ink: '#0A0A0F',
          slate: '#4A4A55',
          mist: '#E8EBF2',
          success: '#2E7D5B',
          warning: '#C68A1A',
          error: '#B3261E',
        },
      },
      fontFamily: {
        display: [
          'Playfair Display',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'serif',
        ],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        script: ['Caveat', 'cursive'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'dr-sm': '0 1px 2px rgba(27, 53, 122, 0.06)',
        'dr-md': '0 4px 8px rgba(27, 53, 122, 0.08)',
        'dr-lg': '0 12px 24px rgba(27, 53, 122, 0.12)',
      },
      borderRadius: {
        'dr-sm': '4px',
        'dr-md': '8px',
        'dr-lg': '16px',
        'dr-xl': '24px',
      },
      spacing: {
        'dr-1': '0.5rem',
        'dr-2': '1rem',
        'dr-3': '1.5rem',
        'dr-4': '2rem',
        'dr-5': '3rem',
        'dr-6': '4rem',
        'dr-7': '6rem',
      },
    },
  },
  plugins: [],
};

export default config;
