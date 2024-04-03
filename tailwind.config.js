/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        card01: "#fdefe6",
        card02: "#d6e5fb",
        card03: "#ceebe9",
        card04: "#e2f2b2",
        primaryColor: "#0a1d37",
        heroBg: "#d6e5fb",
        smallTextColor: "#999",
        headingTextColor: "#0a1d37",
      },
    },
  },
  plugins: [],
};
