# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| pnpm@1.0 | pnpm@2.0 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 19.8s | 19.8s |
| install | ✔    | ✔        | ✔           | 1.1s | 1s |
| install | ✔    | ✔        |             | 8.5s | 7.3s |
| install | ✔    |          |             | 10.4s | 11.1s |
| install |      | ✔        |             | 16.8s | 17.2s |
| install | ✔    |          | ✔           | 7.2s | 7.6s |
| install |      | ✔        | ✔           | 1.1s | 968ms |
| install |      |          | ✔           | 15.9s | 16.6s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| pnpm@1.0 | pnpm@2.0 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 34.7s | 32.6s |
| install | ✔    | ✔        | ✔           | 1.2s | 973ms |
| install | ✔    | ✔        |             | 11.9s | 9.1s |
| install | ✔    |          |             | 13.8s | 12.6s |
| install |      | ✔        |             | 30s | 30s |
| install | ✔    |          | ✔           | 10.2s | 8.6s |
| install |      | ✔        | ✔           | 1.4s | 1s |
| install |      |          | ✔           | 30s | 28.3s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| pnpm@1.0 | pnpm@2.0 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 23.4s | 24.2s |
| install | ✔    | ✔        | ✔           | 1.2s | 1s |
| install | ✔    | ✔        |             | 9.4s | 8.4s |
| install | ✔    |          |             | 12.2s | 12.9s |
| install |      | ✔        |             | 21s | 21.1s |
| install | ✔    |          | ✔           | 8.1s | 8.3s |
| install |      | ✔        | ✔           | 1.3s | 1s |
| install |      |          | ✔           | 19.4s | 19.8s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| pnpm@1.0 | pnpm@2.0 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 18s | 19.4s |
| install | ✔    | ✔        | ✔           | 1.1s | 1s |
| install | ✔    | ✔        |             | 7.8s | 6.6s |
| install | ✔    |          |             | 9.4s | 10.3s |
| install |      | ✔        |             | 16.3s | 17.5s |
| install | ✔    |          | ✔           | 6.7s | 7.4s |
| install |      | ✔        | ✔           | 1.2s | 1.2s |
| install |      |          | ✔           | 15.6s | 16.5s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| pnpm@1.0 | pnpm@2.0 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 21.5s | 21.5s |
| install | ✔    | ✔        | ✔           | 1.3s | 1.2s |
| install | ✔    | ✔        |             | 9s | 8.1s |
| install | ✔    |          |             | 11.2s | 12.6s |
| install |      | ✔        |             | 18.8s | 18.7s |
| install | ✔    |          | ✔           | 7.9s | 8.5s |
| install |      | ✔        | ✔           | 1.3s | 1.2s |
| install |      |          | ✔           | 17.2s | 18.5s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)