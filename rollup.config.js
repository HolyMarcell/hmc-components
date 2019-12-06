import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
import typescript from "rollup-plugin-typescript2";
import sass from 'rollup-plugin-sass';
import dts from 'rollup-plugin-dts';

import pkg from './package.json';

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        name: 'hmc-components',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    external: [
      'react',
      'react-dom',
    ],
    plugins: [
      typescript(),
      peerDepsExternal(),
      sass({
        output: 'dist/hmc-components.css',
      }),
      // postcss({extract: true, plugins: [autoprefixer]}),
      babel({exclude: 'node_modules/**'}),
      localResolve(),
      resolve(),
      commonjs(),
      filesize(),
    ],
  },
  {
    input: "src/types.d.ts",
    output: [{file: "dist/types.d.ts", format: "es"}],
    plugins: [dts()],
  },

];

export default config;
