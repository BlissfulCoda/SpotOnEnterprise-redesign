/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Playfair Display", "system-ui"],
      serif: ["Merriweather", "Georgia"],
      body: ["Merriweather"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
