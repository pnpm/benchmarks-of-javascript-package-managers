# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.3s | 22.1s | 16.8s |
| install | ✔    | ✔        | ✔           | 7.6s | 1s | 873ms |
| install | ✔    | ✔        |             | 13s | 4.6s | 3.3s |
| install | ✔    |          |             | 15.2s | 11.2s | 6.9s |
| install |      | ✔        |             | 15.5s | 14.6s | 14.3s |
| install | ✔    |          | ✔           | 7.7s | 10.9s | 5.8s |
| install |      | ✔        | ✔           | 7.9s | 923ms | 912ms |
| install |      |          | ✔           | 7.8s | 20.3s | 14.5s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.8s | 34.7s | 28.8s |
| install | ✔    | ✔        | ✔           | 6.7s | 950ms | 922ms |
| install | ✔    | ✔        |             | 14.6s | 8.1s | 4.1s |
| install | ✔    |          |             | 16.1s | 18.9s | 7.5s |
| install |      | ✔        |             | 18.2s | 24.4s | 26.7s |
| install | ✔    |          | ✔           | 6.7s | 15.3s | 5.3s |
| install |      | ✔        | ✔           | 6.7s | 919ms | 961ms |
| install |      |          | ✔           | 7s | 36.1s | 26s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.7s | 27.2s | 20.4s |
| install | ✔    | ✔        | ✔           | 7.8s | 982ms | 924ms |
| install | ✔    | ✔        |             | 15.1s | 5.8s | 3.4s |
| install | ✔    |          |             | 17.4s | 20.8s | 7.4s |
| install |      | ✔        |             | 18s | 17.2s | 19.3s |
| install | ✔    |          | ✔           | 7.3s | 12.9s | 5.7s |
| install |      | ✔        | ✔           | 7.8s | 1s | 990ms |
| install |      |          | ✔           | 7.9s | 27.1s | 18.8s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22s | 26.2s | 16.8s |
| install | ✔    | ✔        | ✔           | 6.8s | 905ms | 956ms |
| install | ✔    | ✔        |             | 12.7s | 4.8s | 3.1s |
| install | ✔    |          |             | 15s | 18.6s | 6.3s |
| install |      | ✔        |             | 15.1s | 13.8s | 14.3s |
| install | ✔    |          | ✔           | 7.1s | 16.6s | 4.9s |
| install |      | ✔        | ✔           | 7.1s | 1s | 1s |
| install |      |          | ✔           | 7.2s | 26.9s | 14.7s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 31.9s | 34.6s | 19.9s |
| install | ✔    | ✔        | ✔           | 8.4s | 946ms | 1.2s |
| install | ✔    | ✔        |             | 15.1s | 7.5s | 3.6s |
| install | ✔    |          |             | 18.6s | 30.5s | 8.5s |
| install |      | ✔        |             | 18.4s | 17.5s | 16s |
| install | ✔    |          | ✔           | 7.8s | 23.3s | 6.2s |
| install |      | ✔        | ✔           | 8.7s | 858ms | 1.1s |
| install |      |          | ✔           | 8s | 33.7s | 17s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)