module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      './tests/**/*_spec.ts'
    ],
    exclude: [],
    preprocessors: {
      './tests/**/*_spec.ts': ['webpack']
    },
    // webpack configuration
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeWithoutSecurity'],
    customLaunchers: {
      ChromeWithoutSecurity: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    concurrency: Infinity,
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
  });
};
