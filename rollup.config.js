import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import typescript from "rollup-plugin-typescript2";
import sass from 'rollup-plugin-sass';

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
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    plugins: [
      sass({
        output: 'dist/hmc-components.css',
      }),
      babel({exclude: 'node_modules/**'}),
      resolve(),
      localResolve(),
      typescript(),
      commonjs({
        include: ["node_modules/**"],
        exclude: ["**/*.stories.js"],
        sourceMap: false
      }),
      filesize(),
    ],
  }

];

export default config;
