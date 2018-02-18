# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.9s | 21.1s | 19.2s |
| install | ✔    | ✔        | ✔           | 6.3s | 968ms | 1.5s |
| install | ✔    | ✔        |             | 10.3s | 4.3s | 8.1s |
| install | ✔    |          |             | 20.2s | 11.2s | 9.8s |
| install |      | ✔        |             | 13.9s | 14s | 18.6s |
| install | ✔    |          | ✔           | 6.7s | 11.2s | 7.2s |
| install |      | ✔        | ✔           | 7s | 974ms | 1.6s |
| install |      |          | ✔           | 7.1s | 23.7s | 15.5s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 21.2s | 24.5s | 17s |
| install | ✔    | ✔        | ✔           | 6s | 857ms | 1.5s |
| install | ✔    | ✔        |             | 9.4s | 3.6s | 7.7s |
| install | ✔    |          |             | 18.2s | 14.3s | 9.1s |
| install |      | ✔        |             | 11.9s | 13.5s | 16.5s |
| install | ✔    |          | ✔           | 6.4s | 14s | 6.6s |
| install |      | ✔        | ✔           | 6.7s | 849ms | 1.6s |
| install |      |          | ✔           | 6.7s | 24.2s | 14.3s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 28.1s | 45.6s | 26.5s |
| install | ✔    | ✔        | ✔           | 6.7s | 1s | 1.6s |
| install | ✔    | ✔        |             | 12.5s | 5.7s | 10.3s |
| install | ✔    |          |             | 24.3s | 26s | 12.1s |
| install |      | ✔        |             | 17.5s | 24.9s | 24.7s |
| install | ✔    |          | ✔           | 7.1s | 26.4s | 8s |
| install |      | ✔        | ✔           | 7.4s | 964ms | 1.7s |
| install |      |          | ✔           | 7.5s | 44.5s | 21.4s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 25.8s | 27.9s | 18.5s |
| install | ✔    | ✔        | ✔           | 5.6s | 872ms | 1.6s |
| install | ✔    | ✔        |             | 9.6s | 4.2s | 8s |
| install | ✔    |          |             | 18.9s | 17.2s | 9.3s |
| install |      | ✔        |             | 16.8s | 14.3s | 18.5s |
| install | ✔    |          | ✔           | 6.1s | 17.1s | 7.2s |
| install |      | ✔        | ✔           | 6.2s | 831ms | 1.6s |
| install |      |          | ✔           | 6.5s | 26.5s | 15.7s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 29.9s | 37.7s | 21.9s |
| install | ✔    | ✔        | ✔           | 6s | 926ms | 1.8s |
| install | ✔    | ✔        |             | 14.6s | 7.8s | 9.3s |
| install | ✔    |          |             | 26.4s | 25.8s | 11.7s |
| install |      | ✔        |             | 20.5s | 19.3s | 21.7s |
| install | ✔    |          | ✔           | 5.7s | 24.9s | 7.9s |
| install |      | ✔        | ✔           | 6.1s | 881ms | 1.9s |
| install |      |          | ✔           | 5.6s | 40.4s | 18.5s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)