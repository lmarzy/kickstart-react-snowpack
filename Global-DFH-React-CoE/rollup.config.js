import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import externals from 'rollup-plugin-node-externals';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';
import image from '@rollup/plugin-image';

import pkg from './package.json';

export default [
  {
    input: './src/index.ts',
    plugins: [
      del({ targets: 'dist/*' }),
      externals({ deps: true }),
      nodeResolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        exclude: '**/node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      terser(),
      image(),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];