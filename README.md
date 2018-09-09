# Benchmarks of JavaScript Package Managers

This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React App

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 20s | 16.7s | 16.5s |
| install | ✔    | ✔        | ✔           | 7.5s | 808ms | 869ms |
| install | ✔    | ✔        |             | 12.8s | 4.2s | 4.8s |
| install | ✔    |          |             | 14.4s | 9.8s | 8.5s |
| install |      | ✔        |             | 15.3s | 11.7s | 13.6s |
| install | ✔    |          | ✔           | 7.4s | 6.3s | 6.8s |
| install |      | ✔        | ✔           | 7.7s | 795ms | 889ms |
| install |      |          | ✔           | 7.5s | 15.2s | 14.5s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 23.8s | 31.5s | 29.2s |
| install | ✔    | ✔        | ✔           | 6.7s | 710ms | 892ms |
| install | ✔    | ✔        |             | 14s | 7.6s | 7.9s |
| install | ✔    |          |             | 15.5s | 12.6s | 11.2s |
| install |      | ✔        |             | 17.2s | 27.5s | 26.4s |
| install | ✔    |          | ✔           | 6.7s | 9.9s | 8.3s |
| install |      | ✔        | ✔           | 6.7s | 727ms | 1s |
| install |      |          | ✔           | 6.7s | 29.5s | 26.5s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.8s | 28s | 22.1s |
| install | ✔    | ✔        | ✔           | 7.6s | 767ms | 975ms |
| install | ✔    | ✔        |             | 14.7s | 5.7s | 6.4s |
| install | ✔    |          |             | 16s | 11.5s | 10.4s |
| install |      | ✔        |             | 17.7s | 16.1s | 18.5s |
| install | ✔    |          | ✔           | 7.6s | 9.8s | 8.4s |
| install |      | ✔        | ✔           | 7.7s | 798ms | 1s |
| install |      |          | ✔           | 7.5s | 21.5s | 19.2s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 20.2s | 20.3s | 17.8s |
| install | ✔    | ✔        | ✔           | 7s | 732ms | 970ms |
| install | ✔    | ✔        |             | 12.2s | 4.3s | 5.2s |
| install | ✔    |          |             | 14.6s | 14.6s | 8.5s |
| install |      | ✔        |             | 14.7s | 12.7s | 14.8s |
| install | ✔    |          | ✔           | 7s | 10.2s | 7s |
| install |      | ✔        | ✔           | 6.9s | 746ms | 1s |
| install |      |          | ✔           | 7.3s | 18.4s | 14.9s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 27.5s | 32.5s | 19.1s |
| install | ✔    | ✔        | ✔           | 8.3s | 768ms | 1.2s |
| install | ✔    | ✔        |             | 14.8s | 7.4s | 5.5s |
| install | ✔    |          |             | 17.1s | 18.3s | 9.9s |
| install |      | ✔        |             | 18.6s | 17.1s | 15.6s |
| install | ✔    |          | ✔           | 8.3s | 16s | 8.2s |
| install |      | ✔        | ✔           | 8.7s | 780ms | 1.1s |
| install |      |          | ✔           | 11.7s | 25.8s | 17s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)
