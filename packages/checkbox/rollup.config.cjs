const { withNx } = require('@nx/rollup/with-nx');
const svgr = require('@svgr/rollup');
const postcss = require('rollup-plugin-postcss');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm'],
    plugins: [
      svgr(),
      postcss({
        extract: true,
        minimize: true,
        modules: true,
      })
    ]
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    // output: { sourcemap: true },
  }
);
