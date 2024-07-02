/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        lightYellow: '#FFFFF2',
        customBoxShadow: '0px 8px 20px 0px #D6D3C066',
        lightRed: '#F28482',
        darkGray: '#E6E6E6',
        placeHolderColor: '#3D405B',
        shadow: '0px 8px 20px 0px #F2CC8F66',
        lightRedBackground: '#F5CAC3',
        greenBackground: '#84A59D',
      }
    },
  },
  plugins: [],
}