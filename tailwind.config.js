module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        "space-dark": "#0C090A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
