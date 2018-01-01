import typescript from 'rollup-plugin-typescript2';

const moduleName = 'no-more-for-loops';
const umdName = 'NoMoreForLoops';
const version = '0.1.0';

const myBanner = `/**
* A micro-library for reducing manual for-loops.
* GitHub repository: {@link https://github.com/fal-works/${moduleName}}
* @module ${moduleName}
* @author FAL <falworks.contact@gmail.com>
* @license MIT
* @version ${version}
*/
`;

export default {
  input: `src/${moduleName}.ts`,
  output: [
    {
      file: `lib/${moduleName}.js`,
      format: 'umd',
      name: umdName,
      sourcemap: false,
      banner: myBanner
    },
    {
      file: `lib/${moduleName}.mjs`,
      format: 'es',
      sourcemap: false,
      banner: myBanner
    }
  ],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true
    })
  ]
}
