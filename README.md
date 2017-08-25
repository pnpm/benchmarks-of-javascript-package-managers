# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 34.6s | 26.3s | 11s |
| install | ✔    | ✔        | ✔           | 6.4s | 1.1s | 985ms |
| install | ✔    | ✔        |             | 9.4s | 7s | 4.2s |
| install | ✔    |          |             | 23.4s | 13.7s | 6.1s |
| install |      | ✔        |             | 10.4s | 18.5s | 13.7s |

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 40.6s | 26.2s | 25s |
| install | ✔    | ✔        | ✔           | 11.9s | 1.1s | 1.3s |
| install | ✔    | ✔        |             | 19.3s | 6.2s | 9.1s |
| install | ✔    |          |             | 27.4s | 12.9s | 13.5s |
| install |      | ✔        |             | 27.6s | 17.3s | 22.2s |

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 15.2s | 12s | 12s |
| install | ✔    | ✔        | ✔           | 4.3s | 738ms | 1.1s |
| install | ✔    | ✔        |             | 6.5s | 2.6s | 3.9s |
| install | ✔    |          |             | 9.6s | 6.3s | 6s |
| install |      | ✔        |             | 9.7s | 8.5s | 11s |