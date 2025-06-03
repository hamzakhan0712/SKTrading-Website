module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        gold: {
          DEFAULT: '#FFD700',       // Standard gold
          dark: '#B8860B',          // Darker gold (optional)
          light: '#FFECB3',         // Soft light gold
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
