# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 28.6s | 99.2 MB |
| yarn | 24.1s | 166 MB |
| pnpm install | 10.8s | 97 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 31.3s | 207 MB |
| yarn | 21.5s | 127 MB |
| pnpm install | 22.7s | 129 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time | size in bytes |
| --- | --- | --- |
| npm install | 11.9s | 95.4 MB |
| yarn | 11.1s | 85.7 MB |
| pnpm install | 10.5s | 97.6 MB |