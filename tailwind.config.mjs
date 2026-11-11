/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        void: '#080716',
        panel: '#12102b',
        line: '#2b2753',
        nebula: '#8b6cff',
        ion: '#4fe3ff',
        ember: '#ffb86b',
        mist: '#a9a6cc',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
