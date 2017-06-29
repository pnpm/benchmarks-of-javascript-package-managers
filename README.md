# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 34.6s | 99.2 MB |
| yarn | 34.7s | 163 MB |
| pnpm install | 14.3s | 97 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 49.9s | 205 MB |
| yarn | 21.9s | 110 MB |
| pnpm install | 23.5s | 128 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 15.3s | 95.4 MB |
| yarn | 14.5s | 85.8 MB |
| pnpm install | 10.7s | 97.6 MB |