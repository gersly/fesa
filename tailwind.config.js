/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        heading: ['Dela Gothic One', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      colors: {
        black: '#111111'
      }
    },
  },
  plugins: [],
}
