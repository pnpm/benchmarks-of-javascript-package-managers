# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 44.8s | 96.4 MB |
| yarn | 42.4s | 159 MB |
| pnpm install | 14.6s | 90.8 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 57.6s | 106 MB |
| yarn | 26.1s | 110 MB |
| pnpm install | 18.5s | 108 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 30.8s | 92.2 MB |
| yarn | 15.4s | 85.6 MB |
| pnpm install | 11.6s | 90.4 MB |