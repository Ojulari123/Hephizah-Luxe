/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B0202',
        secondary: '#380F05',
        background: '#FFFEFD',
      },
      fontFamily: {
        'editors-note': ['"Editors Note"', 'serif'],
        'newsreader': ['Newsreader', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}