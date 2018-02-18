# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.1s | 25.2s | 12.3s |
| install | ✔    | ✔        | ✔           | 6.2s | 987ms | 1.4s |
| install | ✔    | ✔        |             | 7.5s | 7.2s | 4.6s |
| install | ✔    |          |             | 19.5s | 13.4s | 7.7s |
| install |      | ✔        |             | 9.6s | 18.9s | 11.9s |
| install | ✔    |          | ✔           | 31s | 13.8s | 3.4s |
| install |      | ✔        | ✔           | 6.9s | 1s | 1.5s |
| install |      |          | ✔           | 6.4s | 25.2s | 10.2s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 30.7s | 27.3s | 21.8s |
| install | ✔    | ✔        | ✔           | 7.3s | 1.1s | 1.7s |
| install | ✔    | ✔        |             | 12.1s | 6.6s | 9.5s |
| install | ✔    |          |             | 22.1s | 15.2s | 10.7s |
| install |      | ✔        |             | 16.4s | 17.9s | 21.5s |
| install | ✔    |          | ✔           | 18.4s | 15.3s | 7.1s |
| install |      | ✔        | ✔           | 7.8s | 1.2s | 1.8s |
| install |      |          | ✔           | 7.4s | 27s | 17.6s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 15.8s | 21.6s | 11.1s |
| install | ✔    | ✔        | ✔           | 4.1s | 589ms | 1.5s |
| install | ✔    | ✔        |             | 5.1s | 2.3s | 4.5s |
| install | ✔    |          |             | 9.3s | 12.2s | 6.1s |
| install |      | ✔        |             | 13.1s | 10.8s | 10.8s |
| install | ✔    |          | ✔           | 4.1s | 12s | 4.1s |
| install |      | ✔        | ✔           | 4.3s | 633ms | 1.5s |
| install |      |          | ✔           | 4.1s | 20.2s | 10.3s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24s | 28.3s | 20.2s |
| install | ✔    | ✔        | ✔           | 6.8s | 925ms | 1.8s |
| install | ✔    | ✔        |             | 9.1s | 4.5s | 8.3s |
| install | ✔    |          |             | 16.9s | 17.7s | 10.1s |
| install |      | ✔        |             | 15.5s | 15.6s | 19.4s |
| install | ✔    |          | ✔           | 6.5s | 17.7s | 6.8s |
| install |      | ✔        | ✔           | 6.9s | 935ms | 1.8s |
| install |      |          | ✔           | 6.6s | 27.1s | 16.2s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 29.1s | 42.1s | 23s |
| install | ✔    | ✔        | ✔           | 5.5s | 1.1s | 2s |
| install | ✔    | ✔        |             | 13.5s | 8s | 9.7s |
| install | ✔    |          |             | 21.8s | 26.1s | 11.6s |
| install |      | ✔        |             | 17.8s | 21.6s | 22.3s |
| install | ✔    |          | ✔           | 5.3s | 25.4s | 8.3s |
| install |      | ✔        | ✔           | 5.7s | 937ms | 2.1s |
| install |      |          | ✔           | 5.2s | 38.9s | 19.7s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)