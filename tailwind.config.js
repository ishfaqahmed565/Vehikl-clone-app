/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#DA212A",
        brand2: "#2A2B3B",
        grayBorder: "#CC1D27",
      },
      fontFamily: {
        inter: ["inter"],
      },
    },
  },
  plugins: [],
};
