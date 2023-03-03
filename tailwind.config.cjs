/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [" ./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fill: {
        main: {
          900: "#404041",
        },
      },
      colors: {
        midnight: {
          950: "#ae4689",
        },
        knight: {
          900: "#ed7332",
        },
        lightorange: {
          200: "#e67e47",
        },
        beige: {
          200: "#f6ede3",
        },
        lavender: {
          200: "#d3cae2",
        },
        sand: {
          200: "#e6c17a",
        },
        walt: {
          200: "#D8C8C6",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
