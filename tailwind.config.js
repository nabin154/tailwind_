/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Noto:['Noto Sans']
      },
      colors:{
        primary:{
          200:'#4f55c1'
        },
        body: '#e6e6e6',
        para:'#7e8a9c',
        
      }
    },
  },
  plugins: [],
}

