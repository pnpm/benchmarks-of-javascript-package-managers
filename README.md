# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| pnpm@1 | pnpm@2 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 19.2s | 19.7s |
| install | ✔    | ✔        | ✔           | 1.2s | 1s |
| install | ✔    | ✔        |             | 8.6s | 7.4s |
| install | ✔    |          |             | 10.7s | 11.1s |
| install |      | ✔        |             | 17.2s | 16.6s |
| install | ✔    |          | ✔           | 7.3s | 7.5s |
| install |      | ✔        | ✔           | 1.1s | 946ms |
| install |      |          | ✔           | 16s | 17s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| pnpm@1 | pnpm@2 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 34.2s | 31.1s |
| install | ✔    | ✔        | ✔           | 1.3s | 954ms |
| install | ✔    | ✔        |             | 12.1s | 9.1s |
| install | ✔    |          |             | 13.8s | 12.6s |
| install |      | ✔        |             | 29.2s | 29s |
| install | ✔    |          | ✔           | 10.3s | 8.6s |
| install |      | ✔        | ✔           | 1.5s | 1s |
| install |      |          | ✔           | 30.1s | 27.9s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| pnpm@1 | pnpm@2 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 23.4s | 24.8s |
| install | ✔    | ✔        | ✔           | 1.2s | 1s |
| install | ✔    | ✔        |             | 9s | 8.2s |
| install | ✔    |          |             | 12s | 12.4s |
| install |      | ✔        |             | 20.3s | 21.2s |
| install | ✔    |          | ✔           | 7.9s | 8.3s |
| install |      | ✔        | ✔           | 1.3s | 1s |
| install |      |          | ✔           | 19.7s | 19.6s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| pnpm@1 | pnpm@2 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 17.9s | 19.5s |
| install | ✔    | ✔        | ✔           | 1.1s | 1s |
| install | ✔    | ✔        |             | 7.9s | 6.7s |
| install | ✔    |          |             | 9.6s | 10.4s |
| install |      | ✔        |             | 16.4s | 16.3s |
| install | ✔    |          | ✔           | 6.8s | 7.2s |
| install |      | ✔        | ✔           | 1.3s | 1.3s |
| install |      |          | ✔           | 15.8s | 16.5s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| pnpm@1 | pnpm@2 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 21.3s | 21.4s |
| install | ✔    | ✔        | ✔           | 1.3s | 1.2s |
| install | ✔    | ✔        |             | 8.9s | 7.8s |
| install | ✔    |          |             | 11.2s | 12.8s |
| install |      | ✔        |             | 18.2s | 19s |
| install | ✔    |          | ✔           | 7.9s | 8.6s |
| install |      | ✔        | ✔           | 1.4s | 1.2s |
| install |      |          | ✔           | 17.4s | 18.6s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)