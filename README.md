# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.3s | 22s | 11.1s |
| install | ✔    | ✔        | ✔           | 5.4s | 942ms | 1.3s |
| install | ✔    | ✔        |             | 7.9s | 7s | 4s |
| install | ✔    |          |             | 17.1s | 13.4s | 5.8s |
| install |      | ✔        |             | 9.2s | 17.6s | 11.1s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 34.7s | 23.2s | 19.6s |
| install | ✔    | ✔        | ✔           | 9.5s | 990ms | 1.6s |
| install | ✔    | ✔        |             | 19.1s | 5.9s | 7.9s |
| install | ✔    |          |             | 26s | 11.8s | 10.3s |
| install |      | ✔        |             | 22.1s | 15s | 18.1s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 12.3s | 16.5s | 10.6s |
| install | ✔    | ✔        | ✔           | 3.4s | 605ms | 1.4s |
| install | ✔    | ✔        |             | 6.3s | 2.3s | 4.4s |
| install | ✔    |          |             | 8.1s | 9.8s | 7.3s |
| install |      | ✔        |             | 8.5s | 10.2s | 10.6s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 28.8s | 22.4s | 18.1s |
| install | ✔    | ✔        | ✔           | 7.1s | 871ms | 1.6s |
| install | ✔    | ✔        |             | 14.7s | 4s | 7.4s |
| install | ✔    |          |             | 19.4s | 13.5s | 9.9s |
| install |      | ✔        |             | 18s | 13.1s | 17.1s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 39.6s | 35s | 21.4s |
| install | ✔    | ✔        | ✔           | 7.3s | 939ms | 1.9s |
| install | ✔    | ✔        |             | 21s | 7.9s | 10.2s |
| install | ✔    |          |             | 28.5s | 20.4s | 12.9s |
| install |      | ✔        |             | 25.5s | 17.8s | 20.6s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)