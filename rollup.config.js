import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import typescript from "rollup-plugin-typescript2";
import pkg from './package.json';
import sass from 'rollup-plugin-sass';
import replace from '@rollup/plugin-replace';
// import dts from 'rollup-plugin-dts';

// -- Config via https://github.com/reduxjs/redux/blob/master/rollup.config.js
// -- I love it!

const babelRuntimeVersion = pkg.dependencies['@babel/runtime'].replace(
  /^[^0-9]*/,
  ''
)

const noDeclarationFiles = {compilerOptions: {declaration: false}}

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
  return id => pattern.test(id)
}

const config = [


  // ES
  {
    input: 'src/index.ts',
    output: {file: pkg.module, format: 'es', indent: false},
    external: makeExternalPredicate([
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ]),
    plugins: [

      sass({
        output: 'dist/hmc-components.css',
      }),
      nodeResolve({
        extensions: ['.ts']
      }),
      //typescript({ tsconfigOverride: noDeclarationFiles }),
      typescript({useTsconfigDeclarationDir: true}),
      babel({
        extensions: ['.ts'],
        exclude: 'node_modules/**',
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {version: babelRuntimeVersion, useESModules: true}
          ]
        ],
        runtimeHelpers: true
      }),
      replace({
        preventAssignment: true,
        "process.env.NODE_ENV": JSON.stringify("development")
      }),
      filesize()
    ]
  },
  /*  {
      input: "src/types.ts",
      output: [{file: 'dist/types.ts'}],
      plugins: [dts()],
    }*/

]


export default config;
