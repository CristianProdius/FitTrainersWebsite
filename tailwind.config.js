/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'main': '#74E700',
        'background': '#151516',
        'secondary': '#1E1E1E',
        'gray': '#504f4f',
        
      },
    },
  },
  plugins: [],
}

