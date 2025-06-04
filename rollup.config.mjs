import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";

export default {
  input: "src/lg-appliance-card.ts",
  output: {
    file: "dist/lg-appliance-card.js",
    format: "es"
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({
      tsconfig: "./tsconfig.json",
      sourceMap: false,
      declaration: false
    }),
    terser(),
    copy({
      targets: [
        { src: "README.md", dest: "dist" },
        { src: "hacs.json", dest: "dist" }
      ]
    })
  ]
};
