# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 56.1s | 96.4 MB |
| yarn | 42.4s | 159 MB |
| pnpm install | 13.2s | 90.8 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 2.3s | 105 MB |
| yarn | 26.1s | 110 MB |
| pnpm install | 20.4s | 108 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 33.5s | 92 MB |
| yarn | 15.4s | 85.6 MB |
| pnpm install | 12.8s | 90.1 MB |