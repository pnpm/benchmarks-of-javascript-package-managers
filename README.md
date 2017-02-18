# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 52.5s | 96.4 MB |
| yarn | 1m 4.6s | 278 MB |
| pnpm install | 11.7s | 90.7 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 3s | 107 MB |
| yarn | 22.1s | 119 MB |
| pnpm install | 26.1s | 106 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 36.2s | 91.4 MB |
| yarn | 17.3s | 85.1 MB |
| pnpm install | 15.9s | 88.5 MB |