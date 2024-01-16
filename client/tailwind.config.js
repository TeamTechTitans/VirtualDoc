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
        'secondary-blue': "#142441",
        'light-teal': "#e9f8f8",
        'body': "##848484"
      },
      fontFamily: {
        'barlow': "Barlow",
        'open-sans': "Open Sans",
      },
    },
  },
  plugins: [],
});