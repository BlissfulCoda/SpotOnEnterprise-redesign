/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "480px",

      md: '640px',

      lg: "768px",

      xl: "1024px",

      '2xl': "1440px",
    },
    fontFamily: {
      serif: ["Playfair Display", "system-ui"],
      sans: ["Merriweather", "Georgia"],
      body: ["Poppins"],
    },
    extend: {
      colors: {
        bgPurple: "#E635ED",
        darkBackground: 'hsl(231,22%,17%)'
      },
      backgroundImage: (theme) => ({
        'dark-mode': "url('./src/Components/assets/Logos/DarkLogo.png')",
        'light-mode': "url('./src/Components/assets/Logos/LightLogo.png')",
      })
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    }
  },
  plugins: [require("daisyui")],
};
