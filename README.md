# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26.1s | 22.2s | 14s |
| install | ✔    | ✔        | ✔           | 5.8s | 796ms | 1.1s |
| install | ✔    | ✔        |             | 8.9s | 6.6s | 4.2s |
| install | ✔    |          |             | 23.1s | 11.4s | 4s |
| install |      | ✔        |             | 10s | 17.2s | 12.1s |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 29s | 19.7s | 23.7s |
| install | ✔    | ✔        | ✔           | 10.2s | 861ms | 1.4s |
| install | ✔    | ✔        |             | 15.4s | 5.8s | 9.7s |
| install | ✔    |          |             | 24.1s | 10.1s | 11.6s |
| install |      | ✔        |             | 16.5s | 15s | 21.9s |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 10.5s | 10.4s | 10.9s |
| install | ✔    | ✔        | ✔           | 3.8s | 544ms | 1.1s |
| install | ✔    | ✔        |             | 5.5s | 2.4s | 4s |
| install | ✔    |          |             | 7.8s | 5.1s | 5.1s |
| install |      | ✔        |             | 7.1s | 7.9s | 10.8s |