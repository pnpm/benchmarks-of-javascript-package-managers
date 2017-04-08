# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 43.7s | 96.5 MB |
| yarn | 38.2s | 158 MB |
| pnpm install | 11.8s | 91 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 55.2s | 111 MB |
| yarn | 27.3s | 110 MB |
| pnpm install | 20.5s | 108 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 31.5s | 92.2 MB |
| yarn | 16.3s | 85.8 MB |
| pnpm install | 10s | 90.6 MB |