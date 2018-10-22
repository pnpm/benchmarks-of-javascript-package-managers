# Benchmarks of JavaScript Package Managers

This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React App

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 19.7s | 16.1s | 14.4s |
| install | ✔    | ✔        | ✔           | 7.4s | 770ms | 858ms |
| install | ✔    | ✔        |             | 12.5s | 4.1s | 4.5s |
| install | ✔    |          |             | 14.6s | 8.4s | 7.9s |
| install |      | ✔        |             | 14.7s | 12.1s | 12.3s |
| install | ✔    |          | ✔           | 7.2s | 6.4s | 6.6s |
| install |      | ✔        | ✔           | 7.8s | 768ms | 864ms |
| install |      |          | ✔           | 7.6s | 15.3s | 13s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 19.6s | 15.9s | 12.9s |
| install | ✔    | ✔        | ✔           | 6.4s | 754ms | 873ms |
| install | ✔    | ✔        |             | 9.5s | 3.7s | 4.1s |
| install | ✔    |          |             | 11.3s | 8.7s | 7s |
| install |      | ✔        |             | 11.9s | 9.8s | 10.9s |
| install | ✔    |          | ✔           | 6.8s | 7.6s | 5.9s |
| install |      | ✔        | ✔           | 6.5s | 703ms | 879ms |
| install |      |          | ✔           | 7.5s | 13.9s | 11.4s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.1s | 22.4s | 19s |
| install | ✔    | ✔        | ✔           | 7.4s | 767ms | 1s |
| install | ✔    | ✔        |             | 13.7s | 5.3s | 6s |
| install | ✔    |          |             | 15.7s | 11s | 9.5s |
| install |      | ✔        |             | 17.1s | 15.5s | 19.1s |
| install | ✔    |          | ✔           | 7.3s | 8.3s | 8.2s |
| install |      | ✔        | ✔           | 7.9s | 753ms | 1.2s |
| install |      |          | ✔           | 7.3s | 23.4s | 18s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 21.2s | 19.1s | 15.5s |
| install | ✔    | ✔        | ✔           | 6.9s | 709ms | 1s |
| install | ✔    | ✔        |             | 11.8s | 4.2s | 5s |
| install | ✔    |          |             | 14.3s | 13.8s | 7.9s |
| install |      | ✔        |             | 14.4s | 12.1s | 14.1s |
| install | ✔    |          | ✔           | 6.6s | 10.1s | 6.9s |
| install |      | ✔        | ✔           | 7.2s | 680ms | 997ms |
| install |      |          | ✔           | 6.9s | 19.5s | 13.7s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 27.8s | 29.1s | 16.8s |
| install | ✔    | ✔        | ✔           | 8.1s | 769ms | 1.1s |
| install | ✔    | ✔        |             | 15.1s | 7.2s | 5.2s |
| install | ✔    |          |             | 17.1s | 17.8s | 9.6s |
| install |      | ✔        |             | 18.2s | 15.9s | 14.7s |
| install | ✔    |          | ✔           | 8.4s | 15.3s | 7.8s |
| install |      | ✔        | ✔           | 8.4s | 742ms | 1.1s |
| install |      |          | ✔           | 9.7s | 26.2s | 16s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)