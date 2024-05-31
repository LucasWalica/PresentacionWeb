/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily:{
        r1:['roboto1','sans-serif'],
        r2:['roboto2','sans-serif'],
        r3:['roboto3','sans-serif'],
        r4:['roboto4','sans-serif'],
        r5:['roboto5','sans-serif']
      }
    }
  },
  plugins: [],
}

