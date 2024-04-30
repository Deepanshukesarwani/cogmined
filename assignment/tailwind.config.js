/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        "spin":"spin 1s linear 10"
      }
    },
  },
  variants: {
    extend: {
      width: ['responsive', 'percent'], // Enable the percent variant for width utilities
    },
  },
  plugins: [],
}

