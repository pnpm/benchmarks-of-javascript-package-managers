# Benchmarks of JavaScript Package Managers

This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React App

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 23.2s | 20.7s | 16.9s |
| install | ✔    | ✔        | ✔           | 8.1s | 842ms | 1s |
| install | ✔    | ✔        |             | 12.9s | 4.5s | 5.1s |
| install | ✔    |          |             | 15.3s | 9.1s | 8.8s |
| install |      | ✔        |             | 16.2s | 12.7s | 14.1s |
| install | ✔    |          | ✔           | 7.5s | 7.2s | 2s |
| install |      | ✔        | ✔           | 7.9s | 823ms | 1s |
| install |      |          | ✔           | 7.6s | 16.7s | 4.3s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 20.1s | 23.5s | 15.1s |
| install | ✔    | ✔        | ✔           | 9.7s | 746ms | 1.1s |
| install | ✔    | ✔        |             | 10.1s | 3.8s | 4.8s |
| install | ✔    |          |             | 12.1s | 9.1s | 8.2s |
| install |      | ✔        |             | 13s | 11s | 13s |
| install | ✔    |          | ✔           | 6.4s | 8.5s | 1.4s |
| install |      | ✔        | ✔           | 6.9s | 761ms | 993ms |
| install |      |          | ✔           | 6.4s | 15.7s | 2.3s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.4s | 24.8s | 22s |
| install | ✔    | ✔        | ✔           | 7.5s | 801ms | 1.1s |
| install | ✔    | ✔        |             | 14.6s | 6s | 6.3s |
| install | ✔    |          |             | 17.1s | 11.3s | 10.5s |
| install |      | ✔        |             | 19s | 17.7s | 19.2s |
| install | ✔    |          | ✔           | 7.2s | 9.7s | 3.4s |
| install |      | ✔        | ✔           | 7.7s | 805ms | 1s |
| install |      |          | ✔           | 7.4s | 23.2s | 9.9s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 23.1s | 22.1s | 17.4s |
| install | ✔    | ✔        | ✔           | 7.2s | 743ms | 1.1s |
| install | ✔    | ✔        |             | 12.4s | 4.8s | 5.4s |
| install | ✔    |          |             | 15.4s | 13.1s | 8.7s |
| install |      | ✔        |             | 16.3s | 13.4s | 15s |
| install | ✔    |          | ✔           | 6.8s | 12.1s | 2.8s |
| install |      | ✔        | ✔           | 6.9s | 706ms | 1.1s |
| install |      |          | ✔           | 6.7s | 20.5s | 6.6s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 29.9s | 31.4s | 20.3s |
| install | ✔    | ✔        | ✔           | 8.1s | 826ms | 1.2s |
| install | ✔    | ✔        |             | 15.7s | 8.2s | 5.6s |
| install | ✔    |          |             | 17.9s | 20.1s | 10.1s |
| install |      | ✔        |             | 19s | 17s | 15.8s |
| install | ✔    |          | ✔           | 7.6s | 16.2s | 2.9s |
| install |      | ✔        | ✔           | 8.8s | 801ms | 1.2s |
| install |      |          | ✔           | 8.1s | 27.1s | 6.8s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)