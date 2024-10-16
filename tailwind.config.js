/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This line is crucial for your JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
