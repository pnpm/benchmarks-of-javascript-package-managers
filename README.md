# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.4s | 24.8s | 11.5s |
| install | ✔    | ✔        | ✔           | 5.2s | 1.1s | 841ms |
| install | ✔    | ✔        |             | 7.7s | 7.5s | 3.8s |
| install | ✔    |          |             | 16.4s | 11.9s | 6.1s |
| install |      | ✔        |             | 9.9s | 18.7s | 11.3s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 39.3s | 22.3s | 21.4s |
| install | ✔    | ✔        | ✔           | 10.3s | 1.2s | 1.2s |
| install | ✔    | ✔        |             | 21.9s | 6.3s | 8.2s |
| install | ✔    |          |             | 28.2s | 12.4s | 10.4s |
| install |      | ✔        |             | 24.5s | 15.5s | 18.9s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 15.5s | 16.1s | 10s |
| install | ✔    | ✔        | ✔           | 3.3s | 625ms | 996ms |
| install | ✔    | ✔        |             | 6.3s | 2.4s | 3.8s |
| install | ✔    |          |             | 8s | 10.6s | 6.5s |
| install |      | ✔        |             | 11s | 8.4s | 9.6s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 29.8s | 22s | 19.2s |
| install | ✔    | ✔        | ✔           | 7.1s | 896ms | 1.2s |
| install | ✔    | ✔        |             | 14.6s | 4.2s | 7.4s |
| install | ✔    |          |             | 19.5s | 14.1s | 9.7s |
| install |      | ✔        |             | 20.8s | 12.3s | 18.7s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 39.3s | 30.8s | 23s |
| install | ✔    | ✔        | ✔           | 7.1s | 965ms | 1.4s |
| install | ✔    | ✔        |             | 21.1s | 8s | 8.7s |
| install | ✔    |          |             | 28.8s | 20.3s | 11.6s |
| install |      | ✔        |             | 27.9s | 16.5s | 23s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)