/** @type {import('tailwindcss').Config} */
const defaultTheme=require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
   './src/components/**/*.{html,js,jsx}',
   './src/pages/**/*.{html,js,jsx}',
   './public/index.html',
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },

  theme: {
    extend: {
  fontFamily:{
    sans:['ClashDisplay-Regular',...defaultTheme.fontFamily.sans]
  },colors:{tomato:"#E50914",marigold:"#ffbe0b",blackly:"#141414",grayly:"#8f9090",grenly:"#46d369",orangew:"#FF7B54",blueciel:"#77ccf0",        peach: '#fff0db',
}

    },
  },
  plugins: [require("daisyui")],
}