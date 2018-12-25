module.exports = {
  plugins: {
    "postcss-import": {}, 
    "postcss-url": {}, 
    "postcss-aspect-ratio-mini": {}, 
    "postcss-write-svg": { utf8: false }, 
    "postcss-cssnext": {}, 
    "postcss-px-to-viewport": { 
      viewportWidth: 375,
      viewportHeight: 812,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
    },
    "cssnano": { preset: "advanced", autoprefixer: false, "postcss-zindex": false }
  }
}
// https://www.w3cplus.com/mobile/vw-layout-in-vue.html
