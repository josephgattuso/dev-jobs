const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    extend: {
      colors: {
        violet: '#5964E0',
        'light-violet': '#939BF4',
        'very-dark-blue': '#19202D',
        midnight: '#121721',
        'light-gray': '#F4F6F8',
        gray: '#9DAEC2',
        'dark-gray': '#6E8098',
        'normal-gray': '#rgba(156, 163, 175)',
        'checkbox-dark': 'rgba(255, 255, 255, 0.1)',
        logo: {
          1: '#df6dae',
          2: '#3db3d1',
          3: '#3d3b94',
          4: '#f0b62a',
          5: '#e66d39',
          6: '#fb7e66',
          7: '#007cff',
          8: '#492a29',
          9: '#60dcad',
          10: '#ff585f',
        },
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        35: '0.35',
      },
      minHeight: {
        card: '14.25rem',
        52: '13rem',
        35: '8.75rem',
      },
      maxWidth: {
        76: '19rem',
        183: '45.75rem',
      },
      spacing: {
        '1px': '0.0625rem',
        3.5: '0.875rem',
        10.5: '2.625rem',
        14.5: '3.625rem',
        30: '7.5rem',
        34: '8.5rem',
        35: '8.75rem',
        76: '19rem',
      },
      borderRadius: {
        button: '0.3125rem',
      },
      lineHeight: {
        button: '1.18rem',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        brand: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      flex: {
        4: '4 4 0%',
      },
    },
  },
  variants: {
    backgroundOpacity: ['responsive', 'hover', 'focus', 'dark'],
  },
  plugins: [require('@tailwindcss/ui')],
};
