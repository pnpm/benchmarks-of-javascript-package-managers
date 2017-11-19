# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.3s | 22.9s | 10.3s |
| install | ✔    | ✔        | ✔           | 5.4s | 976ms | 930ms |
| install | ✔    | ✔        |             | 7.9s | 7.3s | 3.7s |
| install | ✔    |          |             | 17.1s | 11.5s | 3.9s |
| install |      | ✔        |             | 9.2s | 18.3s | 10.3s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 34.7s | 22.5s | 20.4s |
| install | ✔    | ✔        | ✔           | 9.5s | 993ms | 1.2s |
| install | ✔    | ✔        |             | 19.1s | 6.2s | 8s |
| install | ✔    |          |             | 26s | 11.6s | 9.9s |
| install |      | ✔        |             | 22.1s | 15.4s | 19.2s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 12.3s | 16.4s | 10.3s |
| install | ✔    | ✔        | ✔           | 3.4s | 624ms | 1.1s |
| install | ✔    | ✔        |             | 6.3s | 2.3s | 4s |
| install | ✔    |          |             | 8.1s | 8.7s | 5.9s |
| install |      | ✔        |             | 8.5s | 10.5s | 10.3s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 28.8s | 22.2s | 19.5s |
| install | ✔    | ✔        | ✔           | 7.1s | 862ms | 1.3s |
| install | ✔    | ✔        |             | 14.7s | 4.1s | 7.6s |
| install | ✔    |          |             | 19.4s | 12.5s | 10.1s |
| install |      | ✔        |             | 18s | 13s | 17.8s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 39.6s | 32.6s | 22.6s |
| install | ✔    | ✔        | ✔           | 7.3s | 944ms | 1.5s |
| install | ✔    | ✔        |             | 21s | 7.9s | 10.3s |
| install | ✔    |          |             | 28.5s | 20s | 11.8s |
| install |      | ✔        |             | 25.5s | 18.7s | 22s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)