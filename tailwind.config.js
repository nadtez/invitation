const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'myfont': ['Helvetica', ...fontFamily.sans], // call this font with font-myfont
        'body': ['Brandon', ...fontFamily.sans], // call this font with font-body
        'bodybold': ['BrandonBold', ...fontFamily.sans], // call this font with font-body
        'brandon': ['BrandonNet', ...fontFamily.sans] // call this font with font-brandon
      },
      colors: {
        'regal-blue': '#405f77',
      }
    },
  },
  variants: {},
  plugins: [],
}
