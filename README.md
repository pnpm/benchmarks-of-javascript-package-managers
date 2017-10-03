# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.7s | 27.5s | 11.2s |
| install | ✔    | ✔        | ✔           | 5.8s | 1.2s | 1.1s |
| install | ✔    | ✔        |             | 8.3s | 10.4s | 4.1s |
| install | ✔    |          |             | 19.1s | 15.8s | 7.1s |
| install |      | ✔        |             | 12.3s | 21.5s | 11.6s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 36.9s | 27.5s | 22.4s |
| install | ✔    | ✔        | ✔           | 11.4s | 1.3s | 1.3s |
| install | ✔    | ✔        |             | 22.7s | 8.7s | 8.5s |
| install | ✔    |          |             | 29.5s | 15.9s | 11.1s |
| install |      | ✔        |             | 26.2s | 18.2s | 28.2s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 14.5s | 19.2s | 11.3s |
| install | ✔    | ✔        | ✔           | 3.7s | 847ms | 1.2s |
| install | ✔    | ✔        |             | 7.1s | 3.5s | 4s |
| install | ✔    |          |             | 8.9s | 11.7s | 7.4s |
| install |      | ✔        |             | 9s | 11.5s | 10.3s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 45s | 38.1s | 40.8s |
| install | ✔    | ✔        | ✔           | 5.1s | 915ms | 1.9s |
| install | ✔    | ✔        |             | 10.2s | 6.1s | 13.1s |
| install | ✔    |          |             | 19s | 14.2s | 20.7s |
| install |      | ✔        |             | 23.2s | 23.8s | 34.5s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 55.4s | 1m 10.1s | 39.6s |
| install | ✔    | ✔        | ✔           | 5.4s | 1.4s | 2s |
| install | ✔    | ✔        |             | 12.5s | 16.1s | 12.3s |
| install | ✔    |          |             | 21.2s | 27s | 21.3s |
| install |      | ✔        |             | 26.7s | 27.2s | 37.4s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)