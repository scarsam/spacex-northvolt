module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
