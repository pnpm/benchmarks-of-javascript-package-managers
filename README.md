# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 63617 | 96355892 |
| yarn | 94531 | 298348292 |
| pnpm install | 10107 | 90569743 |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 69803 | 108023458 |
| yarn | 21338 | 119143917 |
| pnpm install | 20124 | 103804105 |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 38051 | 90765118 |
| yarn | 14745 | 84502180 |
| pnpm install | 11587 | 86466741 |