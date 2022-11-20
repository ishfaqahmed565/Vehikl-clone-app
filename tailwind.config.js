/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#dd5f13",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
