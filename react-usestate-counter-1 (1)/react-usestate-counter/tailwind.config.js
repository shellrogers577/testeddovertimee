/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#eff0f2",
        ink: "#092634",
        moss: "#50604e",
      },
      fontFamily: {
        display: ["Caveat", "cursive"],
        slab: ["Roboto Slab", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
