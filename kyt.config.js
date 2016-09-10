
const path = require('path');
const constants = require('./src/constants');
const ENV = constants.ENV;
const DEBUG = constants.DEBUG;

module.exports = {
  modifyWebpackConfig: (config, options) => {
    // Add TypeScript support.
    config.resolve.extensions.push('.ts');
    config.module.loaders.push({
      test: /\.ts$/,
      exclude: [/\.(spec|e2e)\.ts$/, /node_modules/],
      loaders: [
        '@angularclass/hmr-loader?pretty=' +
          (ENV === 'development') + '&prod=' + (ENV === 'production'),
        'ts',
      ],
    });

    // Override kyt's .scss loader.
    config.module.loaders = config.module.loaders.map((loader) => {
      if ('.scss'.match(loader.test)) {
        return {
          test: /\.scss$/,
          loader: 'css!postcss!sass'
        };
      }
      return loader;
    });

    return config;
  }
};
