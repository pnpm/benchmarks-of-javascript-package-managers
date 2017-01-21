# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 16s | 96.4 MB |
| yarn | 1m 15.5s | 277 MB |
| pnpm install | 11.9s | 90.7 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 24.5s | 108 MB |
| yarn | 22.7s | 119 MB |
| pnpm install | 24.9s | 110 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 51.2s | 90.8 MB |
| yarn | 15.8s | 84.5 MB |
| pnpm install | 14.4s | 89.2 MB |