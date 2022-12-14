/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",

      tablet: "768px",

      laptop: "1024px",

      desktop: "1280px",

      biggest: "1440px",
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
        darkMode: "rgb(7 14 33)",
      },

      backgroundColor: {
        bgGradient: "bg-gradient-to-r from-[#E34CCE] to-[#E39B57]",
      },

      boxShadow: {
        "3xl": "5px 5px 23px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: (theme) => ({
        photo: "url('/src/Components/assets/images/HeroImage.png')",
      }),
      animation: {
        loader: "loader 1.2s ease-in-out forwards",
        border: "border 4s ease infinite",
      },
      keyframes: {
        loader: {
          "0%": { transform: "scale(.6)" },
          "100%": { transform: "scale(1.5)" },
        },
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};
