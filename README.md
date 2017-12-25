# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.1s | 28.2s | 10.8s |
| install | ✔    | ✔        | ✔           | 6.2s | 972ms | 867ms |
| install | ✔    | ✔        |             | 7.5s | 7.5s | 3.5s |
| install | ✔    |          |             | 19.5s | 12.1s | 3.7s |
| install |      | ✔        |             | 9.6s | 17.6s | 10.5s |
| install | ✔    |          | ✔           | 31s | 12s | 2.5s |
| install |      | ✔        | ✔           | 6.9s | 960ms | 884ms |
| install |      |          | ✔           | 6.4s | 27.6s | 8.7s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 30.7s | 21.9s | 20.5s |
| install | ✔    | ✔        | ✔           | 7.3s | 1s | 1.2s |
| install | ✔    | ✔        |             | 12.1s | 6.3s | 8.3s |
| install | ✔    |          |             | 22.1s | 18.2s | 9.5s |
| install |      | ✔        |             | 16.4s | 14.5s | 20s |
| install | ✔    |          | ✔           | 18.4s | 12.4s | 6.3s |
| install |      | ✔        | ✔           | 7.8s | 963ms | 1.2s |
| install |      |          | ✔           | 7.4s | 21.9s | 16.4s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 15.8s | 15s | 10.9s |
| install | ✔    | ✔        | ✔           | 4.1s | 649ms | 957ms |
| install | ✔    | ✔        |             | 5.1s | 2.5s | 3.9s |
| install | ✔    |          |             | 9.3s | 15.5s | 4.4s |
| install |      | ✔        |             | 13.1s | 9.4s | 10.5s |
| install | ✔    |          | ✔           | 4.1s | 9.4s | 3.4s |
| install |      | ✔        | ✔           | 4.3s | 596ms | 1s |
| install |      |          | ✔           | 4.1s | 15.9s | 8.8s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24s | 23.4s | 19.7s |
| install | ✔    | ✔        | ✔           | 6.8s | 873ms | 1.2s |
| install | ✔    | ✔        |             | 9.1s | 4.3s | 7.7s |
| install | ✔    |          |             | 16.9s | 15.1s | 9.3s |
| install |      | ✔        |             | 15.5s | 11.7s | 18.7s |
| install | ✔    |          | ✔           | 6.5s | 15.7s | 6.4s |
| install |      | ✔        | ✔           | 6.9s | 958ms | 1.2s |
| install |      |          | ✔           | 6.6s | 23.1s | 15.9s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 29.1s | 31.1s | 23.1s |
| install | ✔    | ✔        | ✔           | 5.5s | 936ms | 1.4s |
| install | ✔    | ✔        |             | 13.5s | 8.3s | 10.7s |
| install | ✔    |          |             | 21.8s | 21.7s | 11.7s |
| install |      | ✔        |             | 17.8s | 18.7s | 22.8s |
| install | ✔    |          | ✔           | 5.3s | 20.9s | 8.5s |
| install |      | ✔        | ✔           | 5.7s | 920ms | 1.5s |
| install |      |          | ✔           | 5.2s | 30.5s | 19.5s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)