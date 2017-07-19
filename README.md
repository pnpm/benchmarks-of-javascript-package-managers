# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 24.2s | 99.2 MB |
| yarn | 21.6s | 166 MB |
| pnpm install | 10.2s | 97.1 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 27.3s | 209 MB |
| yarn | 19.1s | 128 MB |
| pnpm install | 21.5s | 129 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 9.6s | 95.4 MB |
| yarn | 10s | 85.7 MB |
| pnpm install | 10s | 97.6 MB |