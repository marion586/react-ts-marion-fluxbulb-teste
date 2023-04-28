/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      dmSam: ["DM Sans", "sas-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
