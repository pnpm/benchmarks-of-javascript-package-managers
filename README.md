# Benchmarks of JavaScript Package Managers

This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React App

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.9s | 18.3s | 17.5s |
| install | ✔    | ✔        | ✔           | 7s | 818ms | 1s |
| install | ✔    | ✔        |             | 12.8s | 4.5s | 5.1s |
| install | ✔    |          |             | 15.4s | 8.7s | 8.5s |
| install |      | ✔        |             | 16.1s | 12.5s | 14.2s |
| install | ✔    |          | ✔           | 6.6s | 6.9s | 2s |
| install |      | ✔        | ✔           | 6.9s | 817ms | 1s |
| install |      |          | ✔           | 6.7s | 16.9s | 4.3s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 21.1s | 17.8s | 15.7s |
| install | ✔    | ✔        | ✔           | 6.1s | 798ms | 1.1s |
| install | ✔    | ✔        |             | 10.2s | 4s | 4.5s |
| install | ✔    |          |             | 12.5s | 9.1s | 7.6s |
| install |      | ✔        |             | 13.7s | 10.7s | 12.3s |
| install | ✔    |          | ✔           | 6s | 7.6s | 1.5s |
| install |      | ✔        | ✔           | 6.2s | 757ms | 1s |
| install |      |          | ✔           | 6s | 15.6s | 2.3s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26.6s | 24.6s | 22.4s |
| install | ✔    | ✔        | ✔           | 7.4s | 796ms | 1.2s |
| install | ✔    | ✔        |             | 14.9s | 6.1s | 6.7s |
| install | ✔    |          |             | 17.8s | 12.3s | 10.5s |
| install |      | ✔        |             | 19.8s | 16.8s | 19.5s |
| install | ✔    |          | ✔           | 6.9s | 9.7s | 7.8s |
| install |      | ✔        | ✔           | 7.9s | 793ms | 1.3s |
| install |      |          | ✔           | 7.1s | 22.3s | 17.6s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.6s | 21.2s | 17.6s |
| install | ✔    | ✔        | ✔           | 6.4s | 718ms | 1.1s |
| install | ✔    | ✔        |             | 12.4s | 4.7s | 5.5s |
| install | ✔    |          |             | 15.2s | 11.6s | 8.7s |
| install |      | ✔        |             | 16.1s | 12.9s | 15.7s |
| install | ✔    |          | ✔           | 6.5s | 10.2s | 2.8s |
| install |      | ✔        | ✔           | 6.8s | 724ms | 1.1s |
| install |      |          | ✔           | 6.2s | 20.4s | 6.6s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 33.9s | 30.6s | 19.8s |
| install | ✔    | ✔        | ✔           | 7.6s | 789ms | 1.3s |
| install | ✔    | ✔        |             | 15.9s | 8s | 5.8s |
| install | ✔    |          |             | 18s | 17s | 10.3s |
| install |      | ✔        |             | 20.4s | 16.4s | 16.8s |
| install | ✔    |          | ✔           | 7.2s | 14s | 3s |
| install |      | ✔        | ✔           | 7.8s | 754ms | 1.2s |
| install |      |          | ✔           | 6.4s | 25.6s | 6.5s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)