/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [" ./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#ae4689",
        },
      },
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};
