# Benchmarks of JavaScript Package Managers

This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React App

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 23.2s | 18.1s | 17s |
| install | ✔    | ✔        | ✔           | 7s | 825ms | 1s |
| install | ✔    | ✔        |             | 12.8s | 4.5s | 5.1s |
| install | ✔    |          |             | 15.3s | 8.5s | 8.3s |
| install |      | ✔        |             | 16.5s | 12.6s | 13.8s |
| install | ✔    |          | ✔           | 6.6s | 6.9s | 1.9s |
| install |      | ✔        | ✔           | 6.9s | 814ms | 1s |
| install |      |          | ✔           | 6.7s | 16.9s | 4.2s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22s | 18.2s | 15.3s |
| install | ✔    | ✔        | ✔           | 6s | 801ms | 1s |
| install | ✔    | ✔        |             | 10.1s | 4s | 4.4s |
| install | ✔    |          |             | 12.4s | 8.7s | 7.5s |
| install |      | ✔        |             | 13.3s | 10.6s | 12.3s |
| install | ✔    |          | ✔           | 5.9s | 7.4s | 1.5s |
| install |      | ✔        | ✔           | 6.1s | 750ms | 1s |
| install |      |          | ✔           | 6s | 15.4s | 2.4s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 27.2s | 25.4s | 22.4s |
| install | ✔    | ✔        | ✔           | 7.2s | 810ms | 1.1s |
| install | ✔    | ✔        |             | 14.5s | 6.2s | 6.8s |
| install | ✔    |          |             | 17.8s | 12.3s | 10.4s |
| install |      | ✔        |             | 20s | 16.9s | 19.2s |
| install | ✔    |          | ✔           | 6.9s | 9.9s | 7.6s |
| install |      | ✔        | ✔           | 7.9s | 778ms | 1.3s |
| install |      |          | ✔           | 7.3s | 22.5s | 17.6s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.7s | 21.9s | 17.7s |
| install | ✔    | ✔        | ✔           | 6.4s | 721ms | 1.1s |
| install | ✔    | ✔        |             | 12.6s | 4.8s | 5.6s |
| install | ✔    |          |             | 15.3s | 12s | 8.7s |
| install |      | ✔        |             | 16.4s | 13s | 16.2s |
| install | ✔    |          | ✔           | 6.7s | 10.1s | 2.8s |
| install |      | ✔        | ✔           | 7s | 707ms | 1.1s |
| install |      |          | ✔           | 6.2s | 19.4s | 6.6s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 35.5s | 32.1s | 18.5s |
| install | ✔    | ✔        | ✔           | 7.7s | 781ms | 1.2s |
| install | ✔    | ✔        |             | 16.1s | 8s | 5.7s |
| install | ✔    |          |             | 18.1s | 17.1s | 10.2s |
| install |      | ✔        |             | 20.5s | 16.4s | 16.2s |
| install | ✔    |          | ✔           | 7.2s | 12.2s | 2.9s |
| install |      | ✔        | ✔           | 7.8s | 743ms | 1.2s |
| install |      |          | ✔           | 6.6s | 24.9s | 6.5s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)