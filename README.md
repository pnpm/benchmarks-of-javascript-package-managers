# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 42.2s | 96.6 MB |
| yarn | 35.6s | 159 MB |
| pnpm install | 12.7s | 96.9 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 1m 5.6s | 114 MB |
| yarn | 22.6s | 110 MB |
| pnpm install | 19.9s | 129 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 36.2s | 93.7 MB |
| yarn | 14.5s | 89 MB |
| pnpm install | 10.7s | 99.5 MB |