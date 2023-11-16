/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "techit-gray": { 300: "#222222" },
      },
    },
  },
  plugins: [],
};
