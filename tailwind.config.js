/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        trout: {
          50:  '#f7f8f8',
          100: '#ededf1',
          200: '#d8dadf',
          300: '#b6b9c3',
          400: '#8e93a2',
          500: '#585c6d',
          600: '#5a5e6f',
          700: '#484b58',
          800: '#3f424d',
          900: '#383942',
          950: '#25262c',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
