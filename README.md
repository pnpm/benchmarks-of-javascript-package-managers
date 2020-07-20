# Benchmarks of JavaScript Package Managers

This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn) (both regular and PnP variant).

Here's a quick explanation of how these tests could apply to the real world:

- `clean install`: How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no `node_modules` folder.
- `with cache`, `with lockfile`, `with node_modules`: After the first install is done, the install command is run again.
- `with cache`, `with lockfile`: When a repo is fetched by a developer and installation is first run.
- `with cache`: Same as the one above, but the package manager doesn't have a lockfile to work from.
- `with lockfile`: When an installation runs on a CI server.
- `with cache`, `with node_modules`: The lockfile is deleted and the install command is run again.
- `with node_modules`, `with lockfile`: The package cache is deleted and the install command is run again.
- `with node_modules`: The package cache and the lockfile is deleted and the install command is run again.
- `update`: Updating your dependencies by changing the version in the `package.json` and running the install command again.

## React App

The app's `package.json` [here](./fixtures/react-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 26s | 11.9s | 19.2s | 14.9s |
| install | ✔     | ✔        | ✔           | 6.7s | 1.3s | 746ms | n/a |
| install | ✔     | ✔        |             | 15s | 6.1s | 5.4s | 1.6s |
| install | ✔     |          |             | 20s | 8.1s | 10s | 6.5s |
| install |       | ✔        |             | 19.2s | 10s | 14.4s | 10.4s |
| install | ✔     |          | ✔           | 6.2s | 972ms | 7.7s | n/a |
| install |       | ✔        | ✔           | 6.6s | 1.3s | 769ms | n/a |
| install |       |          | ✔           | 6.3s | 1.3s | 19s | n/a |
| update  | n/a   | n/a      | n/a         | 7.1s | 9.8s | 21.7s | 16.6s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 19.7s | 10.6s | 16.2s | 13.7s |
| install | ✔     | ✔        | ✔           | 5.8s | 1.2s | 629ms | n/a |
| install | ✔     | ✔        |             | 10.8s | 4.9s | 4.1s | 1.6s |
| install | ✔     |          |             | 14.5s | 6.8s | 9.2s | 7s |
| install |       | ✔        |             | 13.4s | 9s | 11.5s | 8.9s |
| install | ✔     |          | ✔           | 5s | 990ms | 7.8s | n/a |
| install |       | ✔        | ✔           | 5.2s | 1.2s | 653ms | n/a |
| install |       |          | ✔           | 5.2s | 1.2s | 16.3s | n/a |
| update  | n/a   | n/a      | n/a         | 5.5s | 8.1s | 19.1s | 13.5s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 28.7s | 15.3s | 26.1s | 21s |
| install | ✔     | ✔        | ✔           | 7.1s | 1.3s | 730ms | n/a |
| install | ✔     | ✔        |             | 16.4s | 8.1s | 7.2s | 1.8s |
| install | ✔     |          |             | 21.4s | 10.3s | 13.4s | 8.1s |
| install |       | ✔        |             | 20s | 13.4s | 19.1s | 13.9s |
| install | ✔     |          | ✔           | 6.4s | 2.4s | 11.1s | n/a |
| install |       | ✔        | ✔           | 6.8s | 1.4s | 783ms | n/a |
| install |       |          | ✔           | 6.8s | 4.4s | 26.7s | n/a |
| update  | n/a   | n/a      | n/a         | 7.1s | 12.1s | 19.7s | 13.8s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 25.5s | 12.1s | 23.3s | 19s |
| install | ✔     | ✔        | ✔           | 5.9s | 1.2s | 640ms | n/a |
| install | ✔     | ✔        |             | 13.2s | 6.2s | 5.5s | 1.6s |
| install | ✔     |          |             | 18.3s | 8.2s | 12.8s | 8.7s |
| install |       | ✔        |             | 16.2s | 10.8s | 15.2s | 11.5s |
| install | ✔     |          | ✔           | 5.6s | 1.7s | 10.3s | n/a |
| install |       | ✔        | ✔           | 5.8s | 1.3s | 654ms | n/a |
| install |       |          | ✔           | 5.6s | 3.3s | 22.8s | n/a |
| update  | n/a   | n/a      | n/a         | 6.2s | 10.1s | 17.6s | 16.3s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 34.4s | 14.1s | 35.8s | 26.4s |
| install | ✔     | ✔        | ✔           | 6.8s | 1.4s | 718ms | n/a |
| install | ✔     | ✔        |             | 17.3s | 7.4s | 10.4s | 1.8s |
| install | ✔     |          |             | 23.3s | 9.2s | 22s | 13.7s |
| install |       | ✔        |             | 20.8s | 12.3s | 22.1s | 12.7s |
| install | ✔     |          | ✔           | 6.3s | 2.4s | 16.8s | n/a |
| install |       | ✔        | ✔           | 6.7s | 1.5s | 724ms | n/a |
| install |       |          | ✔           | 6.5s | 4.5s | 35s | n/a |
| update  | n/a   | n/a      | n/a         | 7s | 10.4s | 27.9s | 23.8s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)