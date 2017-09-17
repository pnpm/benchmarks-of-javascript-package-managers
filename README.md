# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.7s | 30.7s | 11.9s |
| install | ✔    | ✔        | ✔           | 5.8s | 1.3s | 993ms |
| install | ✔    | ✔        |             | 8.3s | 11s | 4.2s |
| install | ✔    |          |             | 19.1s | 17.7s | 4.1s |
| install |      | ✔        |             | 12.3s | 23.3s | 12.4s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 36.9s | 30.4s | 22.5s |
| install | ✔    | ✔        | ✔           | 11.4s | 1.3s | 1.3s |
| install | ✔    | ✔        |             | 22.7s | 9.7s | 8.7s |
| install | ✔    |          |             | 29.5s | 16.8s | 11.4s |
| install |      | ✔        |             | 26.2s | 19s | 21.4s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 14.5s | 17.6s | 12.1s |
| install | ✔    | ✔        | ✔           | 3.7s | 904ms | 1.1s |
| install | ✔    | ✔        |             | 7.1s | 4s | 4.2s |
| install | ✔    |          |             | 8.9s | 9.2s | 5.2s |
| install |      | ✔        |             | 9s | 11.4s | 10.9s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)