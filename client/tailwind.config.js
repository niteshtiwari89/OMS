/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'custom': 'calc(100vh - 2.5rem)',
      },
      maxHeight:{
        'tableCont':'70vh',
        'contTab':'60vh'
      },
      width:{
        'card':'49%',
        'techDocCard':'32%'
      }
    },
  },
  plugins: [],
}