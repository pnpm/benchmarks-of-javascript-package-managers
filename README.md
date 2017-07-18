# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 26.1s | 99.2 MB |
| yarn | 23.2s | 166 MB |
| pnpm install | 10.7s | 97 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 29.6s | 209 MB |
| yarn | 20.8s | 128 MB |
| pnpm install | 22.8s | 129 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 11s | 95.4 MB |
| yarn | 10.9s | 85.7 MB |
| pnpm install | 10.9s | 97.6 MB |