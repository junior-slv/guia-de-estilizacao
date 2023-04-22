/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-purple': '#924FD2',
      'dark-purple': '#5E2EB1',
      'dark-black': '#252525',
      'ice-white': '#FFFAFA',
    },
    extend: {},
  },

  plugins: [],
}

