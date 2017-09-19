exports.modifyWebpackConfig = ({ config, stage }, options) => {
  const jsFiles = /\.jsx?$/
  const eslintLoader = `eslint-loader?${JSON.stringify(options)}`

  switch (stage) {
    case `develop`: {
      config.loader('eslint-loader', {
        test: jsFiles,
        loaders: [`style`, eslintLoader],
      })

      return config
    }

    default:
      return config
  }
}
