# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26s | 26.7s | 18.6s |
| install | ✔    | ✔        | ✔           | 7.3s | 991ms | 856ms |
| install | ✔    | ✔        |             | 12.2s | 4.5s | 4.4s |
| install | ✔    |          |             | 14.6s | 13.5s | 10.6s |
| install |      | ✔        |             | 16.3s | 16.4s | 16.1s |
| install | ✔    |          | ✔           | 7.5s | 14.5s | 8s |
| install |      | ✔        | ✔           | 7.6s | 935ms | 899ms |
| install |      |          | ✔           | 7.6s | 26.7s | 16.8s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 30.9s | 44.3s | 29.5s |
| install | ✔    | ✔        | ✔           | 6.7s | 928ms | 876ms |
| install | ✔    | ✔        |             | 14.1s | 8s | 6.6s |
| install | ✔    |          |             | 15.6s | 21.3s | 10.8s |
| install |      | ✔        |             | 16.5s | 24.6s | 26.4s |
| install | ✔    |          | ✔           | 6.7s | 19.6s | 9.9s |
| install |      | ✔        | ✔           | 6.5s | 886ms | 862ms |
| install |      |          | ✔           | 7.1s | 47.2s | 27.3s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26.9s | 36.8s | 23.2s |
| install | ✔    | ✔        | ✔           | 7.3s | 943ms | 880ms |
| install | ✔    | ✔        |             | 14.1s | 5.5s | 5.5s |
| install | ✔    |          |             | 15.8s | 30.1s | 10.2s |
| install |      | ✔        |             | 17.3s | 17.9s | 19.6s |
| install | ✔    |          | ✔           | 7.6s | 23.7s | 8.3s |
| install |      | ✔        | ✔           | 7.4s | 900ms | 875ms |
| install |      |          | ✔           | 7.2s | 38s | 20.8s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 23.9s | 42.2s | 17.6s |
| install | ✔    | ✔        | ✔           | 6.9s | 855ms | 903ms |
| install | ✔    | ✔        |             | 12.4s | 4.6s | 4.4s |
| install | ✔    |          |             | 14.6s | 24.8s | 10.4s |
| install |      | ✔        |             | 15.3s | 28.3s | 14.1s |
| install | ✔    |          | ✔           | 7.3s | 33.2s | 7.2s |
| install |      | ✔        | ✔           | 7.1s | 816ms | 966ms |
| install |      |          | ✔           | 7s | 41.6s | 15s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 32.5s | 54.3s | 19.3s |
| install | ✔    | ✔        | ✔           | 8.3s | 898ms | 1s |
| install | ✔    | ✔        |             | 14.6s | 7.5s | 4.7s |
| install | ✔    |          |             | 17.1s | 43.3s | 11.3s |
| install |      | ✔        |             | 18.6s | 19.4s | 16.3s |
| install | ✔    |          | ✔           | 7.6s | 36s | 7.9s |
| install |      | ✔        | ✔           | 8.1s | 877ms | 1s |
| install |      |          | ✔           | 7.5s | 54.2s | 17s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)
