import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";

export default {
  input: "src/lg-appliance-card.ts",
  output: {
    file: "dist/lg-appliance-card.js",
    format: "es",
    sourcemap: false,
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    terser(),
    copy({
      targets: [
        { src: "src/*.ts", dest: "dist/src" }, // Optional: helpful for debugging
        { src: "hacs.json", dest: "dist/" },
        { src: "info.md", dest: "dist/" },
      ],
    }),
  ],
};

