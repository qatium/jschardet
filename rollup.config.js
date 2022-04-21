import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".js", ".ts"];

export default {
  input: "index.js",
  output: [
    {
      file: "dist/jschardet.es.js",
      format: "esm",
      sourcemap: false
    },
    {
        file: "dist/jschardet.js",
        format: "cjs",
        sourcemap: false
    }
  ],
  plugins: [
    json(),
    resolve({ extensions }),
    commonjs(),
    babel({ babelHelpers: "bundled", extensions })
  ]
};