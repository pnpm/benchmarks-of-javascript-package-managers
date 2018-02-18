# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.8s | 21.4s | 19.2s |
| install | ✔    | ✔        | ✔           | 6.4s | 957ms | 1.5s |
| install | ✔    | ✔        |             | 10.3s | 4.3s | 8.1s |
| install | ✔    |          |             | 21s | 11.1s | 9.8s |
| install |      | ✔        |             | 14.3s | 14s | 18.6s |
| install | ✔    |          | ✔           | 6.7s | 11.2s | 7.2s |
| install |      | ✔        | ✔           | 6.9s | 970ms | 1.6s |
| install |      |          | ✔           | 7.2s | 21.1s | 15.5s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 21.3s | 25.4s | 17.4s |
| install | ✔    | ✔        | ✔           | 6s | 862ms | 1.6s |
| install | ✔    | ✔        |             | 9.4s | 3.6s | 7.9s |
| install | ✔    |          |             | 18.3s | 14.2s | 9.3s |
| install |      | ✔        |             | 11.8s | 13.7s | 16.3s |
| install | ✔    |          | ✔           | 6.3s | 14.1s | 7s |
| install |      | ✔        | ✔           | 6.9s | 868ms | 1.6s |
| install |      |          | ✔           | 6.8s | 23.5s | 13.9s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 28s | 44.1s | 28.1s |
| install | ✔    | ✔        | ✔           | 6.7s | 1s | 1.5s |
| install | ✔    | ✔        |             | 12.4s | 5.8s | 10.1s |
| install | ✔    |          |             | 23.7s | 26s | 12.1s |
| install |      | ✔        |             | 17.6s | 25.5s | 24.7s |
| install | ✔    |          | ✔           | 7.1s | 27.3s | 7.9s |
| install |      | ✔        | ✔           | 7.4s | 973ms | 1.7s |
| install |      |          | ✔           | 7.3s | 45.9s | 21.8s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 25.1s | 27.9s | 18.5s |
| install | ✔    | ✔        | ✔           | 5.6s | 828ms | 1.6s |
| install | ✔    | ✔        |             | 9.6s | 4.2s | 7.9s |
| install | ✔    |          |             | 18.9s | 16.7s | 9.3s |
| install |      | ✔        |             | 14.7s | 13.4s | 18.4s |
| install | ✔    |          | ✔           | 6s | 16.4s | 7.8s |
| install |      | ✔        | ✔           | 6.2s | 814ms | 1.6s |
| install |      |          | ✔           | 6.3s | 25.6s | 15.6s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 30.2s | 37.2s | 21.4s |
| install | ✔    | ✔        | ✔           | 6s | 901ms | 1.8s |
| install | ✔    | ✔        |             | 14.7s | 7.9s | 9.5s |
| install | ✔    |          |             | 26.3s | 26.5s | 11.8s |
| install |      | ✔        |             | 20.1s | 19.3s | 22.8s |
| install | ✔    |          | ✔           | 5.8s | 24.7s | 8s |
| install |      | ✔        | ✔           | 6.1s | 885ms | 1.9s |
| install |      |          | ✔           | 5.7s | 36.3s | 18.5s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)