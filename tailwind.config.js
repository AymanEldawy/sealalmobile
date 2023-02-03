/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F1A002',
        secondary: '#646464',
        bgprimary: '#f4f4f4',
        bgseconday: '#FAFAFA',
        tprimary: '#363636',
      },
    },
  },
  plugins: [],
};
