/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-color': '#444444',
        'input-bg-color': '#f2f2f2',
        'border-input-color': '#f87a3c',
        'text-label-color': '#777777',
        'text-header-login': '#55c57a',
        'background-button-form': '#55c57a',
      }
    },
  },
  plugins: [],
}
