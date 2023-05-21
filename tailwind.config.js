/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "450px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#EA4958",
        secondary: "#094E99",
        ptext: '#949CA9',
        bsecondary: "#F2F5F8",
        bmain: "#F4F4F4",
        lead: '#979797'
      },
      minWidth: {
        custom: "345",
      },
    },
  },
  plugins: [],
};
