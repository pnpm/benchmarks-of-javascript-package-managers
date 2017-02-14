# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 9s | 96.4 MB |
| yarn | 1m 5s | 280 MB |
| pnpm install | 29.7s | 90.7 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 22.2s | 107 MB |
| yarn | 21.5s | 119 MB |
| pnpm install | 36s | 106 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 37.5s | 91.4 MB |
| yarn | 14s | 85.1 MB |
| pnpm install | 18s | 88.5 MB |