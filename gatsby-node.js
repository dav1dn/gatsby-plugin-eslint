exports.modifyWebpackConfig = ({ config, stage }, options) => {
  const jsFiles = /\.jsx?$/;
  const eslintLoader = `eslint-loader`;

  console.log(options);
  switch (stage) {
    case `develop`:
      {
        config.loader('eslint-loader', {
          test: jsFiles,
          loader: eslintLoader,
          query: {
            failOnError: false
          }
        });

        return config;
      }

    default:
      {
        return config;
      }
  }
};