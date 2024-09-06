/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        "128": "44rem",
        "130": "52rem"
      }
    },
  },
  plugins: [],
}

