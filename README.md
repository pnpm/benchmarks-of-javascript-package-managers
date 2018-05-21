# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| pnpm@1.0 | pnpm@2.1 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 18.8s | 20s |
| install | ✔    | ✔        | ✔           | 1.1s | 995ms |
| install | ✔    | ✔        |             | 8.4s | 7s |
| install | ✔    |          |             | 10.3s | 10.8s |
| install |      | ✔        |             | 17.2s | 17s |
| install | ✔    |          | ✔           | 7.3s | 7.1s |
| install |      | ✔        | ✔           | 1.1s | 984ms |
| install |      |          | ✔           | 15.6s | 15.8s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| pnpm@1.0 | pnpm@2.1 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 35.2s | 31.5s |
| install | ✔    | ✔        | ✔           | 1.2s | 986ms |
| install | ✔    | ✔        |             | 11.9s | 8.9s |
| install | ✔    |          |             | 13.6s | 11.9s |
| install |      | ✔        |             | 30.9s | 29.9s |
| install | ✔    |          | ✔           | 10.2s | 8.2s |
| install |      | ✔        | ✔           | 1.2s | 983ms |
| install |      |          | ✔           | 28.7s | 26.8s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| pnpm@1.0 | pnpm@2.1 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 22.7s | 23.1s |
| install | ✔    | ✔        | ✔           | 1.2s | 1s |
| install | ✔    | ✔        |             | 8.9s | 8s |
| install | ✔    |          |             | 11.2s | 11.6s |
| install |      | ✔        |             | 20.1s | 21s |
| install | ✔    |          | ✔           | 7.9s | 8.4s |
| install |      | ✔        | ✔           | 1.2s | 1.1s |
| install |      |          | ✔           | 19.2s | 20.3s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| pnpm@1.0 | pnpm@2.1 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 18.4s | 19.2s |
| install | ✔    | ✔        | ✔           | 1.1s | 1s |
| install | ✔    | ✔        |             | 7.4s | 6.7s |
| install | ✔    |          |             | 9.4s | 9.8s |
| install |      | ✔        |             | 18.6s | 17.1s |
| install | ✔    |          | ✔           | 7.1s | 7.4s |
| install |      | ✔        | ✔           | 1.2s | 1.1s |
| install |      |          | ✔           | 15.7s | 16.3s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| pnpm@1.0 | pnpm@2.1 |
| ---     | ---   | ---      | ---         | --- | --- |
| install |       |          |             | 21.4s | 21.5s |
| install | ✔    | ✔        | ✔           | 1.3s | 1.3s |
| install | ✔    | ✔        |             | 9.1s | 7.6s |
| install | ✔    |          |             | 11.2s | 11.5s |
| install |      | ✔        |             | 18.6s | 18.3s |
| install | ✔    |          | ✔           | 8.3s | 8.1s |
| install |      | ✔        | ✔           | 1.3s | 1.2s |
| install |      |          | ✔           | 17.8s | 18.4s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)