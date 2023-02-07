/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "primary-button": "0 4px 0px #ea580c",
        "secondary-button": "0 4px 0px #a3a3a3",
        "navigation-button": "0 3px 0px #e5e5e5",
      },
    },
  },
  plugins: [],
};
