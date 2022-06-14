const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
    extend: {
      fontFamily: {
        popins : ['Poppins',
        ...defaultTheme.fontFamily.sans,]
      },
      colors: {
        "red-cf": "#F55556",
        "pink-cf": "#FDECEC",
        "black-cf" : "#2E2E2E",
        "gray-cf": "#676767",
        "redd" : "#F86061",
        "red-1": "#FEF5F5",
        "green-cf": "#03A66B",
        "yellow-cf": "#F9BA45",

      },
      padding: {
        '10-fix': '10rem',
      },
      screens: {
        'xlg': '1310px',
        // => @media (min-width: 640px) { ... }
      },
    },
    
  },
  plugins: [],
}
