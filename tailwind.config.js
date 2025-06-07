/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#EDE4F0',
        mist: '#F9F6F0',
        amethyst: '#A78BFA',
        rosequartz: '#F3D1DC',
        candle: '#FFF9F3',
        deepPurple: '#5B3E75',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif']
      },
    },
  },
  plugins: [],
}
