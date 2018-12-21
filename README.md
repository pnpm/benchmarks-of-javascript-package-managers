# Benchmarks of JavaScript Package Managers

This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React App

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.6s | 22.3s | 19.6s |
| install | ✔    | ✔        | ✔           | 7.9s | 884ms | 1.1s |
| install | ✔    | ✔        |             | 13.7s | 5.1s | 5.3s |
| install | ✔    |          |             | 16.3s | 10.6s | 9.9s |
| install |      | ✔        |             | 18.8s | 15.4s | 18.4s |
| install | ✔    |          | ✔           | 7.8s | 8.6s | 2.2s |
| install |      | ✔        | ✔           | 8.4s | 862ms | 970ms |
| install |      |          | ✔           | 8.3s | 19.7s | 4.8s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 18.7s | 19.6s | 15.3s |
| install | ✔    | ✔        | ✔           | 6.6s | 775ms | 1.1s |
| install | ✔    | ✔        |             | 10.4s | 3.9s | 4.6s |
| install | ✔    |          |             | 17.5s | 10.8s | 8s |
| install |      | ✔        |             | 14s | 17.6s | 12s |
| install | ✔    |          | ✔           | 6.5s | 11.1s | 1.5s |
| install |      | ✔        | ✔           | 6.6s | 756ms | 943ms |
| install |      |          | ✔           | 6.4s | 16.9s | 2.4s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26s | 29s | 23.1s |
| install | ✔    | ✔        | ✔           | 8s | 839ms | 1.2s |
| install | ✔    | ✔        |             | 14.8s | 6.1s | 6.6s |
| install | ✔    |          |             | 17.6s | 13.4s | 11s |
| install |      | ✔        |             | 19.7s | 17.9s | 20.6s |
| install | ✔    |          | ✔           | 7.4s | 11s | 3.7s |
| install |      | ✔        | ✔           | 8s | 809ms | 1.1s |
| install |      |          | ✔           | 7.6s | 24.6s | 9.6s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.9s | 27.5s | 19.8s |
| install | ✔    | ✔        | ✔           | 7s | 752ms | 1.1s |
| install | ✔    | ✔        |             | 12.4s | 5.2s | 5.7s |
| install | ✔    |          |             | 15.4s | 15.6s | 9.7s |
| install |      | ✔        |             | 15.9s | 13.8s | 16.4s |
| install | ✔    |          | ✔           | 6.9s | 13.9s | 2.9s |
| install |      | ✔        | ✔           | 7.3s | 781ms | 1.2s |
| install |      |          | ✔           | 6.9s | 23.8s | 6.8s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 32.3s | 36.8s | 21.5s |
| install | ✔    | ✔        | ✔           | 10.7s | 850ms | 1.3s |
| install | ✔    | ✔        |             | 16.7s | 8.4s | 5.9s |
| install | ✔    |          |             | 18.7s | 26s | 10.9s |
| install |      | ✔        |             | 21.8s | 18.5s | 16.7s |
| install | ✔    |          | ✔           | 8.5s | 19.7s | 3.2s |
| install |      | ✔        | ✔           | 8.4s | 780ms | 1.2s |
| install |      |          | ✔           | 11.2s | 35s | 6.8s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)