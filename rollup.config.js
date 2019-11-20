import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import wasm from '@rollup/plugin-wasm';

module.exports = [
  {
    input: 'src/js/pluto99.js',
    plugins: [sizeSnapshot(), terser()],
    output: [
      {
        file: 'dist/pluto99.js',
        format: 'umd',
        name: 'pluto99',
      },
    ],
  },
  {
    input: 'src/js/pluto99-wasm.js',
    plugins: [sizeSnapshot(), terser(), wasm()],
    output: [
      {
        file: 'dist/pluto99-wasm.js',
        format: 'umd',
        name: 'pluto99Loader',
      },
    ],
  },
];
