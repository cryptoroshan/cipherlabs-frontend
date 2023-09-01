/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      backgroundColor: {
        'header': 'rgba(16, 24, 40, 0.25)',
        'primary': 'rgba(16, 24, 40, 1)'
      },
      borderColor: {
        'header': '#1D2939'
      },
      textColor: {
        'primary': '#EAECF0',
        'secondary': '#FCFCFD',
        'accent': '#D0D5DD',
        'footer': '#98A2B3',
      }
    },
  },
  plugins: [],
}