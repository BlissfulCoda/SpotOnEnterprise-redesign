/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",

      tablet: "768px",

      laptop: "1024px",

      desktop: "1280px",

      "2xl": "1536px",
    },
    fontFamily: {
      serif: ["Playfair Display", "system-ui"],
      sans: ["Merriweather", "Georgia"],
      body: ["Poppins"],
    },
    extend: {
      fontSize: {
        "9xl": "8.2rem",
      },
      colors: {
        bgPurple: "#E635ED",
        darkMode: "hsla(225, 35%, 12%, 1)",
      },

      backgroundColor: {
        bgGradient: "bg-gradient-to-r from-[#E34CCE] to-[#E39B57]",
      },

      boxShadow: {
        "3xl": "5px 5px 23px rgba(0, 0, 0, 0.2)",
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
