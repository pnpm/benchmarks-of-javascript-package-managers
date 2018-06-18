# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.9s | 21.6s | 19.7s |
| install | ✔    | ✔        | ✔           | 8.1s | 1.1s | 937ms |
| install | ✔    | ✔        |             | 14s | 6s | 5.8s |
| install | ✔    |          |             | 16.3s | 13.1s | 10.1s |
| install |      | ✔        |             | 18.6s | 14.9s | 16.7s |
| install | ✔    |          | ✔           | 9.3s | 11.9s | 7.8s |
| install |      | ✔        | ✔           | 9.6s | 1.2s | 911ms |
| install |      |          | ✔           | 8.1s | 20.8s | 15.8s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26.5s | 38.6s | 30.3s |
| install | ✔    | ✔        | ✔           | 7.1s | 999ms | 909ms |
| install | ✔    | ✔        |             | 15.7s | 10.6s | 8.1s |
| install | ✔    |          |             | 16.7s | 20.1s | 12.4s |
| install |      | ✔        |             | 17s | 28.3s | 31.7s |
| install | ✔    |          | ✔           | 7.4s | 17.5s | 8s |
| install |      | ✔        | ✔           | 6.9s | 1.1s | 919ms |
| install |      |          | ✔           | 7s | 30.9s | 28.3s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 25.2s | 34.4s | 23.8s |
| install | ✔    | ✔        | ✔           | 7.7s | 1.3s | 1s |
| install | ✔    | ✔        |             | 14.9s | 8.1s | 7.3s |
| install | ✔    |          |             | 16.2s | 19.9s | 11.1s |
| install |      | ✔        |             | 17.4s | 21.3s | 20.6s |
| install | ✔    |          | ✔           | 7.8s | 19.5s | 7.9s |
| install |      | ✔        | ✔           | 8.3s | 1.1s | 1s |
| install |      |          | ✔           | 7.6s | 30.2s | 19.8s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.1s | 26.2s | 18.6s |
| install | ✔    | ✔        | ✔           | 7s | 970ms | 976ms |
| install | ✔    | ✔        |             | 12.2s | 5.7s | 5.7s |
| install | ✔    |          |             | 14.8s | 20s | 9.4s |
| install |      | ✔        |             | 13.9s | 14.4s | 17.3s |
| install | ✔    |          | ✔           | 7s | 21.6s | 6.8s |
| install |      | ✔        | ✔           | 7.4s | 950ms | 1.1s |
| install |      |          | ✔           | 7.2s | 25.7s | 16s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 30.5s | 39.6s | 20.7s |
| install | ✔    | ✔        | ✔           | 8.4s | 1.1s | 1.1s |
| install | ✔    | ✔        |             | 15.2s | 12s | 6.2s |
| install | ✔    |          |             | 17.6s | 29.6s | 10.7s |
| install |      | ✔        |             | 18.5s | 21s | 17.8s |
| install | ✔    |          | ✔           | 8.1s | 25.9s | 7.9s |
| install |      | ✔        | ✔           | 8.5s | 1s | 1.1s |
| install |      |          | ✔           | 8.3s | 35.5s | 17.3s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)