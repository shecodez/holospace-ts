const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    positions: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundPosition: (theme) => theme('positions'),
    objectPosition: (theme) => theme('positions'),
    filters: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
    },
    extend: {
      colors: {
        primary: colors.indigo, //'var(--color-primary)',
        secondary: colors.emerald, //'var(--color-secondary)',
        neutral: colors.gray,
        error: colors.red,
        info: colors.blue,
        success: colors.green,
        warning: colors.yellow
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    //require('tailwindcss-dark-mode')(),
    plugin(function ({ addUtilities, addComponents }) {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          position: 'relative',
        },
        '.btn-primary': {
          backgroundColor: '#6366F1',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#4338CA',
          },
          '&:focus': {
            backgroundColor: '#4338CA',
          },
        },
        '.btn-secondary': {
          backgroundColor: '#10B981',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#047857',
          },
          '&:focus': {
            backgroundColor: '#047857',
          },
        },
      };
      const overflow = {
        '.overflow-y-overlay': {
          overflowY: 'auto',
          overflowY: 'overlay'
        },
        '.overflow-x-overlay': {
          overflowX: 'auto',
          overflowX: 'overlay'
        }
      }

      addComponents(buttons);
      addUtilities(overflow);
    }),
  ],
};
