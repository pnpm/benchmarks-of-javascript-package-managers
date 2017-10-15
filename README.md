# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.3s | 23.5s | 10.6s |
| install | ✔    | ✔        | ✔           | 5.4s | 1.1s | 963ms |
| install | ✔    | ✔        |             | 7.9s | 7.6s | 3.7s |
| install | ✔    |          |             | 17.1s | 11.8s | 3.9s |
| install |      | ✔        |             | 9.2s | 17.8s | 11.2s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 34.7s | 23.5s | 21.7s |
| install | ✔    | ✔        | ✔           | 9.5s | 1s | 1.3s |
| install | ✔    | ✔        |             | 19.1s | 6.3s | 8.4s |
| install | ✔    |          |             | 26s | 12.2s | 10.7s |
| install |      | ✔        |             | 22.1s | 15s | 20.5s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 12.3s | 16s | 10.7s |
| install | ✔    | ✔        | ✔           | 3.4s | 637ms | 1s |
| install | ✔    | ✔        |             | 6.3s | 2.5s | 4.2s |
| install | ✔    |          |             | 8.1s | 10.2s | 4.9s |
| install |      | ✔        |             | 8.5s | 8.1s | 10.5s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 28.8s | 21.1s | 19.8s |
| install | ✔    | ✔        | ✔           | 7.1s | 882ms | 1.3s |
| install | ✔    | ✔        |             | 14.7s | 4.3s | 7.8s |
| install | ✔    |          |             | 19.4s | 13s | 10.2s |
| install |      | ✔        |             | 18s | 11.7s | 18.4s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 39.6s | 32.9s | 24.7s |
| install | ✔    | ✔        | ✔           | 7.3s | 1s | 1.6s |
| install | ✔    | ✔        |             | 21s | 8.2s | 10.9s |
| install | ✔    |          |             | 28.5s | 19.9s | 12.4s |
| install |      | ✔        |             | 25.5s | 16.3s | 23.2s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)