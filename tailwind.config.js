/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#206745',
        black: '#000',
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
