const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      primary: {
        light: 'var(--primary-light)',
        DEFAULT: 'var(--primary)',
      },
      secondary: {
        light: 'var(--secondary-light)',
        DEFAULT: 'var(--secondary)',
      },
      white: 'var(--white)',
      black: 'var(--black)',
      gray: {
        1: 'var(--gray-1)',
        2: 'var(--gray-2)',
        3: 'var(--gray-3)',
        4: 'var(--gray-4)',
      },
      red: {
        1: 'var(--red-1)',
        2: 'var(--red-2)',
        3: 'var(--red-3)',
        4: 'var(--red-4)',
      },
    },
    spacing: {
      xxxs: 'var(--spacing-xxxs)',
      xxs: 'var(--spacing-xxs)',
      xs: 'var(--spacing-xs)',
      s: 'var(--spacing-s)',
      m: 'var(--spacing-m)',
      l: 'var(--spacing-l)',
      xl: 'var(--spacing-xl)',
      xxl: 'var(--spacing-xxl)',
      xxxl: 'var(--spacing-xxxl)',
    },
  },
  plugins: [],
};
