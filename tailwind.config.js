/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cprimary: "#0AB88A",
        csecondary: "#2C3333",
      },
    },
    fontFamily: {
      fontprimary: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
