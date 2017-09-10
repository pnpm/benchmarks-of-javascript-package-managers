# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.5s | 29.7s | 10.4s |
| install | ✔    | ✔        | ✔           | 5.3s | 1.1s | 941ms |
| install | ✔    | ✔        |             | 7.8s | 10.5s | 3.9s |
| install | ✔    |          |             | 17.3s | 16.1s | 5.7s |
| install |      | ✔        |             | 11s | 21.2s | 11.9s |

![results](./results/imgs/react-app.svg "Graph of the react-app results")

## Ember app

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 36.8s | 28.2s | 23.2s |
| install | ✔    | ✔        | ✔           | 10.9s | 1.2s | 1.2s |
| install | ✔    | ✔        |             | 21.6s | 9.1s | 8.1s |
| install | ✔    |          |             | 28.2s | 18.5s | 10.6s |
| install |      | ✔        |             | 25.2s | 18.2s | 20s |

![results](./results/imgs/ember-quickstart.svg "Graph of the ember-quickstart results")

## Angular app

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 13.5s | 16s | 10.4s |
| install | ✔    | ✔        | ✔           | 3.6s | 805ms | 1.1s |
| install | ✔    | ✔        |             | 6.9s | 3.5s | 3.8s |
| install | ✔    |          |             | 8.5s | 10.5s | 6.5s |
| install |      | ✔        |             | 8.9s | 11.1s | 10.1s |

![results](./results/imgs/angular-quickstart.svg "Graph of the angular-quickstart results")