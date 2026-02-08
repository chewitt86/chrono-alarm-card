import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/chrono-alarm-card.ts',
  output: {
    file: 'dist/chrono-alarm-card.js',
    format: 'es',
    sourcemap: false,
  },
  plugins: [
    resolve(),
    typescript(),
    terser({
      format: {
        comments: false,
      },
    }),
  ],
};
