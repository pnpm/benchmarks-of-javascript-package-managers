# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 34.6s | 99.2 MB |
| yarn | 23.7s | 165 MB |
| pnpm install | 10.5s | 97 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 49.9s | 205 MB |
| yarn | 12.8s | 111 MB |
| pnpm install | 22.5s | 128 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 15.3s | 95.4 MB |
| yarn | 11.9s | 85.7 MB |
| pnpm install | 10.4s | 97.6 MB |