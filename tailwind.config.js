/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      "9xl": "6.9rem",
    },
    fontFamily: {
      serif: ["Playfair Display", "system-ui"],
      sans: ["Merriweather", "Georgia"],
      body: ["Poppins"],
    },
    extend: {
      colors: {
        bgPurple: "#E635ED",
        bgGradient: "bg-gradient-to-r from-[#E34CCE] to-[#E39B57] shadow-2xl",
      },
    },
  },
  plugins: [require("daisyui")],
};
