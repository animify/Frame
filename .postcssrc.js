module.exports = {
    plugins: [
      require('postcss-export-vars')({
        file: 'src/index.scss',
        type: 'json',
        match: [],
      }),
    ],
  };
