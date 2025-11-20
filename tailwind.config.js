/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2a9d8f',
        'secondary': '#264653',
        'accent': '#e76f51',
      },
    },
  },
  plugins: [],
}
