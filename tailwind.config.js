/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'header': '#1D2939'
      },
      textColor: {
        'primary': '#EAECF0',
        'secondary': '#FCFCFD'
      }
    },
  },
  plugins: [],
}