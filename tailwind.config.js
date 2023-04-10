/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0063C6",
        secondary: "#FFC33A",
        bmain: "#F2F5F8",
        lead:'#979797'
      },
    },
  },
  plugins: [],
};
