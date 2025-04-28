/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['GT Walsheim Trial', 'sans-serif'],
        logo: ['Sue Ellen Francisco', 'cursive'],
        body: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


