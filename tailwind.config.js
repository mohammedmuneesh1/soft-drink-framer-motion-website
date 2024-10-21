/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#f97316",
      },
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
        handwriting:["Merienda","cursive"],
      },
      container:{
        center: true,
        padding:{ //THIS PADDING ONLY APPLIED TO THE LEFT AND RIGHT SIDE OF THE CONTAINER 
          DEFAULT:"1rem", //THIS ALL MAX-WIDTH PROPERTY . DEFAULT IS WHEN SCREEN SIZE LESS THAN 640PX
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          // "2xl":"6rem",
        }
      }

    },
  },
  plugins: [],
}

