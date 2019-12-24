module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 100,
      unitPrecision: 5,
      propList: ['*'],
      // selectorBlackList: ['nut-'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 1
    }
    // 'postcss-px-to-viewport': {
    //   unitToConvert: 'px',
    //   viewportWidth: 375,
    //   unitPrecision: 5,
    //   propList: ['*'],
    //   viewportUnit: 'vw',
    //   fontViewportUnit: 'vw',
    //   selectorBlackList: [],
    //   minPixelValue: 1,
    //   mediaQuery: false,
    //   replace: true,
    //   // exclude: [/node_modules/],
    //   landscape: false,
    //   landscapeUnit: 'vw',
    //   landscapeWidth: 667
    // }
  }
};
