# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 31.9s | 96.5 MB |
| yarn | 36s | 162 MB |
| pnpm install | 9.9s | 96.9 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 34.4s | 140 MB |
| yarn | 22.8s | 110 MB |
| pnpm install | 19.2s | 123 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 14.6s | 95.3 MB |
| yarn | 14.6s | 89.2 MB |
| pnpm install | 10s | 99.9 MB |