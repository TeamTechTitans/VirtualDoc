const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': "#22b6af",
        'secondary-blue': "#1d5ccd",
        'light-teal': "#e9f8f8",
        'primary-black': '#142441'
      },
      fontFamily: {
        'barlow': "Barlow",
        'open-sans': "Open Sans",
      },
      backgroundImage: {
        'testimonial-bg': "url('./src/assets/background/testimonial-bg.jpg')",
      },
    },
  },
  plugins: [],
});