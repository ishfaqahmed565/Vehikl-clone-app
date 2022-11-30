/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF0101",
        grayBorder: "#CC1D27",
      },
      fontFamily: {
        inter: ["inter"],
      },
    },
  },
  plugins: [],
};
