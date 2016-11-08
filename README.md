
# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)
      | command | time in ms | size in bytes |
      | --- | --- | --- |
      | yarn | 31875 | 175712562 |
      | pnpm install | 8589 | 91086578 |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)
      | command | time in ms | size in bytes |
      | --- | --- | --- |
      | yarn | 17532 | 120189948 |
      | pnpm install | 13916 | 102686940 |
