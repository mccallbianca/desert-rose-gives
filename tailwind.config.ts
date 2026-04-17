import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette matched to the DR Gives logo: royal + sky on black
        ink: {
          950: '#050509',
          900: '#0A0A12',
          800: '#12121C',
          700: '#1C1C2A',
          600: '#2A2A3C',
          500: '#3B3B52',
        },
        royal: {
          // Deep ultramarine — primary "DESERT ROSE" wordmark blue
          50:  '#EEF1FC',
          100: '#D7DEF7',
          200: '#B0BDEF',
          300: '#8097E3',
          400: '#5471D3',
          500: '#2E4FBE',
          600: '#1E3FA6',
          700: '#152E7F',
          800: '#0D1F58',
          900: '#070F33',
        },
        sky: {
          // Bright aqua — "gives" script accent
          50:  '#EAF8FE',
          100: '#CCEEFB',
          200: '#9CDDF7',
          300: '#6FCCF0',
          400: '#4FBDE8',
          500: '#2AAEDF',
          600: '#1A8EB9',
          700: '#116C8E',
          800: '#0B4C65',
          900: '#062E3F',
        },
        bone: {
          50:  '#FBFBFB',
          100: '#F3F3F4',
          200: '#D8D8DC',
          300: '#A7A7B2',
          400: '#6F6F80',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        displayish: '-0.035em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
