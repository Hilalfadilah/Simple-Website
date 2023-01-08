/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: './styles/tailwind.config.js',
  plugins: [require('prettier-plugin-tailwindcss')],
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding: '16px'
    },
    extend: {
      colors:{
        primary:'#14b8a6',
        dark:'#0f172a',
        secondary:'#64748b',
        main:'#2dd4bf',
      },
      screens:{
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}
