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
| install |       |          |             | 24.7s | 18.1s | 20.2s | 15.9s |
| install | ✔     | ✔        | ✔           | 6.8s | 1.5s | 860ms | n/a |
| install | ✔     | ✔        |             | 16.1s | 6.9s | 5.6s | 1.8s |
| install | ✔     |          |             | 22.9s | 11.4s | 10s | 6.2s |
| install |       | ✔        |             | 20.1s | 16.7s | 14.3s | 10.7s |
| install | ✔     |          | ✔           | 7.4s | 2s | 8.2s | n/a |
| install |       | ✔        | ✔           | 7.3s | 1.4s | 834ms | n/a |
| install |       |          | ✔           | 7.4s | 4.5s | 20.9s | n/a |
| update  | n/a   | n/a      | n/a         | 7.6s | 16s | 22.9s | 16.1s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 22s | 16.2s | 19.5s | 14.8s |
| install | ✔     | ✔        | ✔           | 5.9s | 1.3s | 694ms | n/a |
| install | ✔     | ✔        |             | 12.2s | 5.8s | 4.9s | 1.7s |
| install | ✔     |          |             | 16.9s | 9.6s | 10.4s | 7s |
| install |       | ✔        |             | 14.9s | 15.3s | 12.7s | 10s |
| install | ✔     |          | ✔           | 5.8s | 1.4s | 8.5s | n/a |
| install |       | ✔        | ✔           | 6s | 1.3s | 686ms | n/a |
| install |       |          | ✔           | 6.1s | 2.6s | 17.1s | n/a |
| update  | n/a   | n/a      | n/a         | 6.1s | 14.2s | 19.9s | 12.2s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 7.4s | 24.1s | 26.9s | 23.2s |
| install | ✔     | ✔        | ✔           | 7.8s | 1.6s | 834ms | n/a |
| install | ✔     | ✔        |             | 21s | 8.6s | 7.5s | 1.9s |
| install | ✔     |          |             | 24.9s | 13s | 14.1s | 7.8s |
| install |       | ✔        |             | 21s | 21.5s | 20s | 15.2s |
| install | ✔     |          | ✔           | 7.1s | 3.6s | 9.8s | n/a |
| install |       | ✔        | ✔           | 7.3s | 1.5s | 750ms | n/a |
| install |       |          | ✔           | 7.3s | 9.5s | 25.8s | n/a |
| update  | n/a   | n/a      | n/a         | 7.4s | 16.8s | 20.4s | 13.3s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 25.5s | 20s | 25.5s | 20.7s |
| install | ✔     | ✔        | ✔           | 6.4s | 1.4s | 733ms | n/a |
| install | ✔     | ✔        |             | 14.5s | 6.9s | 6.2s | 1.8s |
| install | ✔     |          |             | 20s | 10.9s | 15.3s | 10.5s |
| install |       | ✔        |             | 18.4s | 18s | 16.1s | 12.3s |
| install | ✔     |          | ✔           | 6.5s | 2.7s | 12.9s | n/a |
| install |       | ✔        | ✔           | 6.7s | 1.3s | 702ms | n/a |
| install |       |          | ✔           | 6.9s | 7s | 25.5s | n/a |
| update  | n/a   | n/a      | n/a         | 6.7s | 13.7s | 24.3s | 20.6s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 6.6s | 22.4s | 35s | 42.7s |
| install | ✔     | ✔        | ✔           | 7.4s | 1.6s | 810ms | n/a |
| install | ✔     | ✔        |             | 21.8s | 7.5s | 10.7s | 2.1s |
| install | ✔     |          |             | 33s | 12.3s | 22.2s | 18.2s |
| install |       | ✔        |             | 22.3s | 18.4s | 22.2s | 13s |
| install | ✔     |          | ✔           | 7s | 3.5s | 15.6s | n/a |
| install |       | ✔        | ✔           | 6.8s | 1.5s | 787ms | n/a |
| install |       |          | ✔           | 6.5s | 7.5s | 32.2s | n/a |
| update  | n/a   | n/a      | n/a         | 6.8s | 16.9s | 34.1s | 25s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)