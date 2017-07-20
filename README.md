# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26.8s | 22.6s | 11.8s |
| install | ✔    | ✔        | ✔           | 5.8s | 803ms | 989ms |
| install | ✔    | ✔        |             | 8.7s | 6.6s | 4.2s |
| install | ✔    |          |             | 22.7s | 11.4s | 4s |
| install |      | ✔        |             | 9.8s | 17.8s | 11.5s |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 29.2s | 19.6s | 23.4s |
| install | ✔    | ✔        | ✔           | 10s | 849ms | 1.2s |
| install | ✔    | ✔        |             | 15.3s | 5.7s | 9.3s |
| install | ✔    |          |             | 24.3s | 10s | 11.4s |
| install |      | ✔        |             | 16.6s | 15.1s | 20.6s |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 10.9s | 10.1s | 10.7s |
| install | ✔    | ✔        | ✔           | 3.8s | 519ms | 1.1s |
| install | ✔    | ✔        |             | 5.6s | 2.3s | 4s |
| install | ✔    |          |             | 8.1s | 5s | 5.1s |
| install |      | ✔        |             | 6.6s | 8.1s | 10.9s |