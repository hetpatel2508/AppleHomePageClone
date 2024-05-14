/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '3xl': '1920px', 
        '4xl': '2400px', 
        '5xl': '3840px', 
        '6xl': '6400px', 
      }
    },
  },
  plugins: [],
}

