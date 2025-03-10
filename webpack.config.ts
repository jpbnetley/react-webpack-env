import path from "path";
import type { Configuration } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import Dotenv from 'dotenv-webpack'

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: Configuration = {
  entry: "./src/entrypoint.tsx",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
    new Dotenv({
      /** 
       * prefix: 'import.meta.env.' 
       * import.meta.env does not get stubbed if the .env file is not present.
       * Throws cannot read undefined of meta (import.meta.env.name) [env is undefined in production build]
       * Looks like it was decided not to stub prefix
       * https://github.com/mrsteele/dotenv-webpack/pull/482#discussion_r775382798
       * 
       * also, process.env cannot be optional chained 'process.env?.name' 
       * if optional chain is used, the name is always undefined
      */
    })
  ],
};

export default config;
