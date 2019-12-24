const { NODE_ENV, VUE_APP_API_HOST, VUE_APP_PATH } = process.env;

module.exports = {
  publicPath: NODE_ENV === 'development' ? '' : `./${VUE_APP_PATH}/`,
  indexPath: NODE_ENV === 'development' ? 'index.html' : `../${VUE_APP_PATH}.html`,
  outputDir: `dist/${VUE_APP_PATH}`,
  devServer: {
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/proxy': {
        target: VUE_APP_API_HOST,
        pathRewrite: { '^/proxy': '' },
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '~@/assets/scss/var.scss'; @import "@nutui/nutui/dist/styles/index.scss"; `
      }
    }
  },

  configureWebpack: {
    optimization: {
      splitChunks: {
        maxInitialRequests: 3,
        cacheGroups: {
          nutui: {
            name: 'chunk-ui',
            test: /[\\\/]node_modules[\\\/]@nutui[\\\/]/,
            priority: -9,
            chunks: 'initial'
          },
          vue: {
            name: 'chunk-vue',
            test: /[\\\/]node_modules[\\\/](vue|axios|vue-router|)[\\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      }
    }
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    // config.plugins.delete('prefetch');
  }
};
