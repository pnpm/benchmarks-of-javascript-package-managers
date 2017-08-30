# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 39.5s | 24.9s | 16.5s |
| install | ✔    | ✔        | ✔           | 6.3s | 1.1s | 952ms |
| install | ✔    | ✔        |             | 9.5s | 6.9s | 4.2s |
| install | ✔    |          |             | 23.1s | 12.8s | 4.5s |
| install |      | ✔        |             | 14.6s | 19s | 13.5s |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 41s | 24.7s | 23.8s |
| install | ✔    | ✔        | ✔           | 11.6s | 1.1s | 1.3s |
| install | ✔    | ✔        |             | 18.8s | 6s | 8.3s |
| install | ✔    |          |             | 27s | 12.1s | 12.1s |
| install |      | ✔        |             | 20.7s | 17.5s | 20.7s |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 16s | 11.2s | 13.8s |
| install | ✔    | ✔        | ✔           | 4.3s | 723ms | 1.1s |
| install | ✔    | ✔        |             | 6.7s | 2.5s | 3.8s |
| install | ✔    |          |             | 8.9s | 6.4s | 5.7s |
| install |      | ✔        |             | 8.9s | 9.9s | 10.8s |