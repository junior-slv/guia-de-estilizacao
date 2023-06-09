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
      'dark-purple': '#7c3aed',
      'dark-black': '#252525',
      'ice-white': '#FFFAFA',
    },
    extend:
    {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'purple-room': "url('/src/assets/bg.jpg')",
      }
    },
  },

  plugins: [],
}

