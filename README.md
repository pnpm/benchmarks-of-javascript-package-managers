# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 31.6s | 96.5 MB |
| yarn | 31.9s | 162 MB |
| pnpm install | 13.3s | 96.9 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 33.3s | 140 MB |
| yarn | 20.7s | 110 MB |
| pnpm install | 19.5s | 123 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 13.9s | 95.3 MB |
| yarn | 13.5s | 89.2 MB |
| pnpm install | 10.3s | 99.9 MB |