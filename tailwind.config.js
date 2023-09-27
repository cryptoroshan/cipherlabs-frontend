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
      borderRadius: {
        '2md': '10px'
      },
      textColor: {
        'primary': '#EAECF0',
        'secondary': '#FCFCFD',
        'accent': '#D0D5DD',
        'green': '#1ADEC6',
        'footer': '#98A2B3',
      },
      boxShadow: {
        'small': '0px 0px 100px 0px #000'
      }
    },
  },
  plugins: [],
}