/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "Verdana", "sans-serif"],
        heading: ["Montserrat", "Verdana", "sans-serif"],
      },
      colors: {
        main: "#ababab",
        light: "#d0d0d0",
        xLight: "#f2f2f2",
        dark: "#787878",
        xDark: "#424242",
      },
    },
  },
  plugins: [],
};
