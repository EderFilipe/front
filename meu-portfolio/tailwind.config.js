/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: {
          600: "#25262B",
          900: "#101113",
        },
        green: {
          500: "#1EB720",
        },
      },
    },
  },
  plugins: [],
};
