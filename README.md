# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 30.7s | 27.8s | 21.8s |
| install | ✔    | ✔        | ✔           | 8s | 1.2s | 939ms |
| install | ✔    | ✔        |             | 13.7s | 6.3s | 6s |
| install | ✔    |          |             | 15.9s | 14.9s | 11.6s |
| install |      | ✔        |             | 18.7s | 18.9s | 18s |
| install | ✔    |          | ✔           | 8.8s | 16s | 10.2s |
| install |      | ✔        | ✔           | 9s | 1.2s | 982ms |
| install |      |          | ✔           | 8s | 28.2s | 18.6s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 29.1s | 51.2s | 33.2s |
| install | ✔    | ✔        | ✔           | 7.2s | 1.1s | 942ms |
| install | ✔    | ✔        |             | 16s | 11.2s | 8.2s |
| install | ✔    |          |             | 17s | 33.3s | 15.1s |
| install |      | ✔        |             | 19s | 31.8s | 32.6s |
| install | ✔    |          | ✔           | 7.5s | 23.8s | 10.4s |
| install |      | ✔        | ✔           | 7s | 1.1s | 1s |
| install |      |          | ✔           | 7s | 45.2s | 31.4s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 27.6s | 43.2s | 27.2s |
| install | ✔    | ✔        | ✔           | 7.7s | 1.2s | 991ms |
| install | ✔    | ✔        |             | 15.1s | 8s | 7.1s |
| install | ✔    |          |             | 16.6s | 29.8s | 13.1s |
| install |      | ✔        |             | 18.3s | 26.2s | 20.2s |
| install | ✔    |          | ✔           | 7.7s | 29.2s | 9.1s |
| install |      | ✔        | ✔           | 8.4s | 1.1s | 1s |
| install |      |          | ✔           | 7.6s | 41s | 21.6s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 28.8s | 50.9s | 21.3s |
| install | ✔    | ✔        | ✔           | 7.8s | 948ms | 1s |
| install | ✔    | ✔        |             | 12.6s | 5.6s | 5.9s |
| install | ✔    |          |             | 15.1s | 34.6s | 10.5s |
| install |      | ✔        |             | 16s | 20.1s | 17.2s |
| install | ✔    |          | ✔           | 7.1s | 31.5s | 10.5s |
| install |      | ✔        | ✔           | 7.5s | 959ms | 1.1s |
| install |      |          | ✔           | 7.2s | 42.2s | 19.4s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 38.9s | 1m 5.5s | 24s |
| install | ✔    | ✔        | ✔           | 8.7s | 1.2s | 1.2s |
| install | ✔    | ✔        |             | 15.5s | 12.3s | 6.4s |
| install | ✔    |          |             | 18.2s | 49.9s | 11.4s |
| install |      | ✔        |             | 20.8s | 25.1s | 19.2s |
| install | ✔    |          | ✔           | 8.1s | 41.6s | 9s |
| install |      | ✔        | ✔           | 8.8s | 1.1s | 1.2s |
| install |      |          | ✔           | 8.5s | 50.9s | 20.9s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)