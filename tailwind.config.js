/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryColor" : "#212121" , 
        "accentColor" : "#181818",
        "headingColor" : "#eee" , 
        "sectionColor" : "#BDBDBD" , 
        "headerColor" : "#fff" , 
        "divderColorDark" : "#212121"
      },  

    },
  },
  plugins: [],
}

