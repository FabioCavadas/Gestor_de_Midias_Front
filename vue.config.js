module.exports = {
  devServer: {
    port: 8080,
  },
  configureWebpack: {
    entry: './src/main.ts',
    resolve: {
      extensions: ['.js','.ts', '.json', '.vue'],      
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },   
  },
  transpileDependencies: [
    'vuex-module-decorators',
  ],
};
