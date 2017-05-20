# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 42.8s | 96.7 MB |
| yarn | 31.3s | 159 MB |
| pnpm install | 11.6s | 96.9 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 14.7s | 151 MB |
| yarn | 24s | 110 MB |
| pnpm install | 19.5s | 129 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 30.2s | 97.1 MB |
| yarn | 14s | 89.2 MB |
| pnpm install | 9.7s | 99.8 MB |