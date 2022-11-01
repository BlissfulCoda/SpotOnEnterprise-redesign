/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",

      tablet: "768px",

      laptop: "1024px",

      desktop: "1200px",

      "2xl": "1440px",
    },
    fontFamily: {
      serif: ["Playfair Display", "system-ui"],
      sans: ["Merriweather", "Georgia"],
      body: ["Poppins"],
    },
    extend: {
      colors: {
        bgPurple: "#E635ED",
        darkMode: "hsla(223, 40%, 9%, 1)",
      },
      backgroundImage: (theme) => ({
        "dark-mode": "url('./src/Components/assets/Logos/DarkLogo.png')",
        "light-mode": "url('./src/Components/assets/Logos/LightLogo.png')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};
