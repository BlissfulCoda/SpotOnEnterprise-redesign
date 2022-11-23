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
        photo: "url('../src/Components/assets/Images/HeroImage.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      }),
      animation: {
        loader: "loader 1s ease-in-out forwards",
        // animation
        wave: "wave 3s infinite both",
      },
      keyframes: {
        loader: {
          "0%": { transform: "scale(.6)" },
          "100%": { transform: "scale(1.5)" },
        },
        wave: {
          "0%, 100%": {
            transform: "translateX(0%)",
          },
          "50%": {
            transform: "translateX(2px) rotate(40deg)",
          },
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
