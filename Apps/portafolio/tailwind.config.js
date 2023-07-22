/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extender los colores, similar a las variables en css
      colors: {
        primary: "#45B39D",
        second: "#ACDFD4",
      },
      // safelist: ['animate-[slide-right_1s_ease-in-out]']
    },
  },
  plugins: [],
}