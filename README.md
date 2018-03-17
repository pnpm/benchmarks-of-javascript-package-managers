# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24s | 17.8s | 19.1s |
| install | ✔    | ✔        | ✔           | 8.1s | 1.1s | 1.1s |
| install | ✔    | ✔        |             | 12.3s | 4.7s | 8s |
| install | ✔    |          |             | 21.4s | 9.6s | 9.6s |
| install |      | ✔        |             | 15.4s | 13.1s | 18.2s |
| install | ✔    |          | ✔           | 8.4s | 9.5s | 6s |
| install |      | ✔        | ✔           | 8.7s | 1.1s | 1.1s |
| install |      |          | ✔           | 8.5s | 19.1s | 14.8s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 27.4s | 36.5s | 28.6s |
| install | ✔    | ✔        | ✔           | 6.7s | 1.1s | 1.1s |
| install | ✔    | ✔        |             | 14s | 8.5s | 10.4s |
| install | ✔    |          |             | 27.3s | 16s | 11.9s |
| install |      | ✔        |             | 19.9s | 24.5s | 29.7s |
| install | ✔    |          | ✔           | 7s | 16s | 7.7s |
| install |      | ✔        | ✔           | 7.1s | 1.1s | 1.1s |
| install |      |          | ✔           | 7.3s | 32.7s | 24s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 27.2s | 45.3s | 24.8s |
| install | ✔    | ✔        | ✔           | 7.7s | 1.1s | 1.1s |
| install | ✔    | ✔        |             | 13.5s | 6.2s | 9.9s |
| install | ✔    |          |             | 24s | 44.9s | 11.7s |
| install |      | ✔        |             | 17.6s | 20.2s | 24.4s |
| install | ✔    |          | ✔           | 7.9s | 38.3s | 8s |
| install |      | ✔        | ✔           | 8.3s | 1s | 1.2s |
| install |      |          | ✔           | 8.5s | 55.7s | 19.9s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.8s | 22.3s | 23.7s |
| install | ✔    | ✔        | ✔           | 6.9s | 1s | 1.2s |
| install | ✔    | ✔        |             | 11.2s | 4.6s | 7.8s |
| install | ✔    |          |             | 19.5s | 30.5s | 9.4s |
| install |      | ✔        |             | 19.9s | 13.2s | 17.8s |
| install | ✔    |          | ✔           | 7.5s | 20.3s | 6.1s |
| install |      | ✔        | ✔           | 7.6s | 970ms | 1.2s |
| install |      |          | ✔           | 7.4s | 21.6s | 15.3s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 28s | 28.9s | 20.6s |
| install | ✔    | ✔        | ✔           | 6.7s | 1s | 1.3s |
| install | ✔    | ✔        |             | 14.6s | 7.8s | 8.6s |
| install | ✔    |          |             | 23.9s | 19.5s | 10.6s |
| install |      | ✔        |             | 17.9s | 16.9s | 20.7s |
| install | ✔    |          | ✔           | 6.8s | 18.9s | 7.2s |
| install |      | ✔        | ✔           | 7s | 1s | 1.4s |
| install |      |          | ✔           | 6.7s | 27.7s | 17.1s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)