# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 1.4s | 96.4 MB |
| yarn | 1m 21.1s | 294 MB |
| pnpm install | 12.7s | 90.8 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 3.8s | 105 MB |
| yarn | 20.7s | 119 MB |
| pnpm install | 26.9s | 107 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 34.7s | 92 MB |
| yarn | 15.1s | 85.7 MB |
| pnpm install | 15.8s | 89.9 MB |