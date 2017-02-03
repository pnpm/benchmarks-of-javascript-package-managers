# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 6.4s | 96.4 MB |
| yarn | 1m 41.6s | 298 MB |
| pnpm install | 11.6s | 90.7 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 9.8s | 108 MB |
| yarn | 22s | 119 MB |
| pnpm install | 23.1s | 107 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 37.2s | 90.8 MB |
| yarn | 15s | 84.5 MB |
| pnpm install | 12.6s | 87.9 MB |