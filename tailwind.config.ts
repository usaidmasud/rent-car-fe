import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        sidebar: {
          main: '#663600',
        },
        primary: {
          main: '#DF711B',
          hover: '#BF6018',
          dark: '#9F5014',
          light: '#E68439',
          ring: '#EB985A',
        },
        secondary: {
          main: '#e5e5e5',
          hover: '#D5D5D5',
          dark: '#C5C5C5',
          light: '#E7E7E7',
          ring: '#EBEBEB',
        },
        info: {
          main: '#4361ee',
          hover: '#1C42EA',
          dark: '#1334C8',
          light: '#5F7AF0',
          ring: '#7A90F3',
        },
        success: {
          main: '#048966',
          hover: '#047758',
          dark: '#035942',
          light: '#07D79F',
          ring: '#33F9C4',
        },
        danger: {
          main: '#e63946',
          hover: '#DA1B2B',
          dark: '#B61624',
          light: '#EA5460',
          ring: '#ED707B',
        },
        warning: {
          main: '#ffbe0b',
          hover: '#E3A700',
          dark: '#BD8B00',
          light: '#FFC72D',
          ring: '#FFD050',
        },
      },
    },
  },
  plugins: [],
}
export default config
