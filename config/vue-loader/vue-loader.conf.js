var path = require('path')
var utils = require('../../scripts/utils')
var config = require('../webpack')
var postcssPlugins = require('../postcss/postcss.config.js').plugins
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: {
   plugins: postcssPlugins
 }
}
