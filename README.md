# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 82411 | 96825002 |
| yarn | 32462 | 175713152 |
| pnpm install | 22350 | 91086578 |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 166925 | 105615718 |
| yarn | 19426 | 120189948 |
| pnpm install | 18240 | 102686669 |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | 85625 | 81464712 |
| yarn | 14376 | 87297812 |
| pnpm install | 9262 | 77677097 |