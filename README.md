# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 37.8s | 96.4 MB |
| yarn | 1m 12.6s | 298 MB |
| pnpm install | 11.5s | 90.8 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 54.1s | 105 MB |
| yarn | 27.3s | 119 MB |
| pnpm install | 24.1s | 107 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 30.5s | 92 MB |
| yarn | 16.6s | 85.7 MB |
| pnpm install | 15.2s | 89.9 MB |