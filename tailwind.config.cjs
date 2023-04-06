/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    colors: {
      'nav_color': '#1C2B35',
      'cart_color': '#FFE0B3',
      'border_color': '#E5E5E5',
      'order-body': '#ffe1b3',
      'order_red': '#FF3030',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'white': '#ffffff',
      'gray-light': '#d3dce6',
    },
    
  
  },

  plugins: [require("daisyui")],
}
