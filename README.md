# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26.7s | 20.1s | 19.8s |
| install | ✔    | ✔        | ✔           | 8.3s | 1.2s | 1s |
| install | ✔    | ✔        |             | 12.8s | 4.8s | 7.5s |
| install | ✔    |          |             | 23.4s | 10.8s | 10.2s |
| install |      | ✔        |             | 16.4s | 13.9s | 17.8s |
| install | ✔    |          | ✔           | 8.5s | 10.6s | 6.4s |
| install |      | ✔        | ✔           | 8.7s | 1.1s | 1s |
| install |      |          | ✔           | 8.5s | 19.3s | 15.7s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 28.7s | 35.3s | 29.3s |
| install | ✔    | ✔        | ✔           | 7.2s | 1.1s | 1s |
| install | ✔    | ✔        |             | 14.5s | 8.5s | 9.8s |
| install | ✔    |          |             | 23.1s | 17.8s | 11.9s |
| install |      | ✔        |             | 21.9s | 24s | 27.8s |
| install | ✔    |          | ✔           | 7.3s | 16.7s | 7.8s |
| install |      | ✔        | ✔           | 7.4s | 1.1s | 973ms |
| install |      |          | ✔           | 7.8s | 33.7s | 24.7s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 29.7s | 39.9s | 25.1s |
| install | ✔    | ✔        | ✔           | 8.3s | 1.1s | 1s |
| install | ✔    | ✔        |             | 14.7s | 6.3s | 8.9s |
| install | ✔    |          |             | 24.8s | 24s | 11.5s |
| install |      | ✔        |             | 18.9s | 20.3s | 24.7s |
| install | ✔    |          | ✔           | 8.3s | 25.7s | 7.6s |
| install |      | ✔        | ✔           | 8.5s | 1.1s | 1s |
| install |      |          | ✔           | 8.9s | 39.3s | 22.3s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 25.9s | 24.5s | 19.4s |
| install | ✔    | ✔        | ✔           | 7.2s | 1s | 1.1s |
| install | ✔    | ✔        |             | 11.9s | 4.9s | 7.3s |
| install | ✔    |          |             | 20.9s | 15.3s | 9.6s |
| install |      | ✔        |             | 16.8s | 13.7s | 17.2s |
| install | ✔    |          | ✔           | 7.4s | 15.3s | 6.2s |
| install |      | ✔        | ✔           | 7.9s | 1s | 1.1s |
| install |      |          | ✔           | 8.1s | 25.2s | 15.8s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 31.6s | 32.7s | 21.5s |
| install | ✔    | ✔        | ✔           | 7.3s | 1.1s | 1.2s |
| install | ✔    | ✔        |             | 15.2s | 7.9s | 7.5s |
| install | ✔    |          |             | 25.8s | 21.3s | 10.8s |
| install |      | ✔        |             | 19.1s | 19.6s | 18.9s |
| install | ✔    |          | ✔           | 6.7s | 22.3s | 7.4s |
| install |      | ✔        | ✔           | 7.2s | 1.1s | 1.2s |
| install |      |          | ✔           | 6.7s | 30.9s | 17.6s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)