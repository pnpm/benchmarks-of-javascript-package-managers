# Benchmarks of JavaScript Package Managers

This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React App

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.6s | 20.6s | 18.2s |
| install | ✔    | ✔        | ✔           | 6.7s | 814ms | 1.1s |
| install | ✔    | ✔        |             | 12.3s | 4.5s | 4.8s |
| install | ✔    |          |             | 15s | 10.5s | 8.5s |
| install |      | ✔        |             | 15.7s | 13.3s | 14.5s |
| install | ✔    |          | ✔           | 6.8s | 8.9s | 2s |
| install |      | ✔        | ✔           | 7s | 796ms | 1s |
| install |      |          | ✔           | 6.7s | 19.1s | 4.2s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 18.9s | 19.9s | 14.2s |
| install | ✔    | ✔        | ✔           | 6s | 766ms | 1s |
| install | ✔    | ✔        |             | 10s | 3.8s | 4.3s |
| install | ✔    |          |             | 12.8s | 13s | 7.6s |
| install |      | ✔        |             | 13.8s | 11.5s | 12s |
| install | ✔    |          | ✔           | 5.7s | 11.8s | 1.5s |
| install |      | ✔        | ✔           | 6.3s | 719ms | 1s |
| install |      |          | ✔           | 5.9s | 22.5s | 2.4s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26.8s | 29.1s | 21.1s |
| install | ✔    | ✔        | ✔           | 7.2s | 791ms | 1.1s |
| install | ✔    | ✔        |             | 14.5s | 5.9s | 6.2s |
| install | ✔    |          |             | 16.9s | 14.7s | 10.4s |
| install |      | ✔        |             | 19.4s | 17.7s | 18.2s |
| install | ✔    |          | ✔           | 6.9s | 12.8s | 7.6s |
| install |      | ✔        | ✔           | 7.3s | 767ms | 1.2s |
| install |      |          | ✔           | 7s | 26.7s | 16.9s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 23.9s | 26.6s | 18.7s |
| install | ✔    | ✔        | ✔           | 6.4s | 741ms | 1.1s |
| install | ✔    | ✔        |             | 11.9s | 4.8s | 5.2s |
| install | ✔    |          |             | 15s | 17.2s | 8.5s |
| install |      | ✔        |             | 16.5s | 13.4s | 14.7s |
| install | ✔    |          | ✔           | 6.4s | 13.6s | 2.7s |
| install |      | ✔        | ✔           | 6.8s | 708ms | 1.1s |
| install |      |          | ✔           | 6.6s | 24.3s | 6.8s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 34.1s | 32.6s | 20.6s |
| install | ✔    | ✔        | ✔           | 7.2s | 858ms | 1.3s |
| install | ✔    | ✔        |             | 15.6s | 9.1s | 5.5s |
| install | ✔    |          |             | 18s | 27.6s | 10.2s |
| install |      | ✔        |             | 21.2s | 20.4s | 16.2s |
| install | ✔    |          | ✔           | 8.3s | 22.1s | 3.1s |
| install |      | ✔        | ✔           | 8.3s | 825ms | 1.2s |
| install |      |          | ✔           | 6.7s | 36.8s | 6.9s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)