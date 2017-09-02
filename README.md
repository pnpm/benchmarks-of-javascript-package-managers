# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 28.4s | 26.1s | 11.1s |
| install | ✔    | ✔        | ✔           | 5.8s | 1.3s | 976ms |
| install | ✔    | ✔        |             | 8.8s | 8s | 4.2s |
| install | ✔    |          |             | 18.7s | 14.6s | 5.4s |
| install |      | ✔        |             | 9.9s | 19.3s | 11.8s |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 40.9s | 23.5s | 22.5s |
| install | ✔    | ✔        | ✔           | 11.6s | 1.2s | 1.3s |
| install | ✔    | ✔        |             | 22.7s | 6.4s | 8s |
| install | ✔    |          |             | 29.8s | 11s | 11.5s |
| install |      | ✔        |             | 26.7s | 16.3s | 21s |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 14.2s | 11.7s | 11.4s |
| install | ✔    | ✔        | ✔           | 3.8s | 730ms | 1s |
| install | ✔    | ✔        |             | 7.2s | 2.6s | 3.9s |
| install | ✔    |          |             | 9.1s | 6.3s | 5.4s |
| install |      | ✔        |             | 9.4s | 8s | 11.3s |