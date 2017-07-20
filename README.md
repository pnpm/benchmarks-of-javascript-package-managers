# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26.1s | 22.3s | 12.4s |
| install | ✔    | ✔        | ✔           | 5.8s | 797ms | 1s |
| install | ✔    | ✔        |             | 8.8s | 6.6s | 4.2s |
| install | ✔    |          |             | 22.6s | 11.4s | 4s |
| install |      | ✔        |             | 10s | 17.5s | 11.6s |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 29.2s | 19.6s | 23.5s |
| install | ✔    | ✔        | ✔           | 10.1s | 849ms | 1.3s |
| install | ✔    | ✔        |             | 15.2s | 5.7s | 9.2s |
| install | ✔    |          |             | 23.9s | 10.1s | 11.3s |
| install |      | ✔        |             | 16.6s | 14.7s | 21s |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 10.9s | 10.2s | 10.7s |
| install | ✔    | ✔        | ✔           | 3.8s | 526ms | 1.1s |
| install | ✔    | ✔        |             | 5.5s | 2.3s | 3.9s |
| install | ✔    |          |             | 7.8s | 5s | 5.1s |
| install |      | ✔        |             | 6.8s | 8s | 10.8s |