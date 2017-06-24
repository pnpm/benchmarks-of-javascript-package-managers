# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 31.9s | 140 MB |
| yarn | 36s | 162 MB |
| pnpm install | 11s | 219 MB |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 34.4s | 198 MB |
| yarn | 22.8s | 110 MB |
| pnpm install | 22.7s | 295 MB |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 14.6s | 134 MB |
| yarn | 14.6s | 89.9 MB |
| pnpm install | 10.9s | 231 MB |