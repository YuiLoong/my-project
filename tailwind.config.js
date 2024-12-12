/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#914bfa",
        secondary: "#e86f00",
        tertiary: "#f58653",
        quaternary: "#ff61a5" ,
        primaryDark: "#702496", 
        // #d65609
        dark: "#656565",
      },
      container: {
        center: true,
        padding: {
          DEFAULT:"1rem",
          sm:"2rem",
        },
      }
    },
  },
  plugins: [],
}

