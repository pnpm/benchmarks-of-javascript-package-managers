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
| install |       |          |             | 27.1s | 16.4s | 21.5s | 16.8s |
| install | ✔     | ✔        | ✔           | 7.2s | 1.5s | 759ms | n/a |
| install | ✔     | ✔        |             | 16.1s | 6.7s | 5.7s | 1.7s |
| install | ✔     |          |             | 21.2s | 9.5s | 10.8s | 6.8s |
| install |       | ✔        |             | 19.3s | 12.9s | 15.4s | 11.4s |
| install | ✔     |          | ✔           | 6.9s | 1.1s | 9s | n/a |
| install |       | ✔        | ✔           | 7.2s | 1.4s | 804ms | n/a |
| install |       |          | ✔           | 6.6s | 1.3s | 20.1s | n/a |
| update  | n/a   | n/a      | n/a         | 7s | 12.9s | 23.8s | 18.9s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 28.7s | 13.1s | 18.8s | 17s |
| install | ✔     | ✔        | ✔           | 6.2s | 1.4s | 673ms | n/a |
| install | ✔     | ✔        |             | 12.5s | 5.6s | 5.1s | 1.7s |
| install | ✔     |          |             | 17.5s | 7.9s | 11.2s | 7.3s |
| install |       | ✔        |             | 15.7s | 11s | 14s | 11.1s |
| install | ✔     |          | ✔           | 5.9s | 1.1s | 9.6s | n/a |
| install |       | ✔        | ✔           | 6.2s | 1.4s | 682ms | n/a |
| install |       |          | ✔           | 5.9s | 1.2s | 18.3s | n/a |
| update  | n/a   | n/a      | n/a         | 5.9s | 12.2s | 22.7s | 15.7s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 32.4s | 18.4s | 28.3s | 25s |
| install | ✔     | ✔        | ✔           | 7.1s | 1.5s | 746ms | n/a |
| install | ✔     | ✔        |             | 17.5s | 9s | 7.4s | 2s |
| install | ✔     |          |             | 23.8s | 11.6s | 16.2s | 11.5s |
| install |       | ✔        |             | 22.9s | 16.1s | 20.7s | 15.7s |
| install | ✔     |          | ✔           | 6.8s | 2.4s | 10.9s | n/a |
| install |       | ✔        | ✔           | 7.4s | 1.5s | 764ms | n/a |
| install |       |          | ✔           | 6.8s | 4.4s | 29.9s | n/a |
| update  | n/a   | n/a      | n/a         | 7.1s | 15.9s | 21.3s | 13.6s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 27.9s | 15.1s | 28s | 22.4s |
| install | ✔     | ✔        | ✔           | 6.7s | 1.4s | 687ms | n/a |
| install | ✔     | ✔        |             | 14.9s | 7s | 5.8s | 1.8s |
| install | ✔     |          |             | 21s | 10.5s | 14.3s | 13.3s |
| install |       | ✔        |             | 18.6s | 12.8s | 17s | 13.3s |
| install | ✔     |          | ✔           | 6.7s | 1.5s | 12.2s | n/a |
| install |       | ✔        | ✔           | 6.8s | 1.4s | 751ms | n/a |
| install |       |          | ✔           | 6.5s | 2.4s | 25.5s | n/a |
| update  | n/a   | n/a      | n/a         | 6.5s | 12.9s | 22.4s | 21.3s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 45.3s | 18s | 35.6s | 30.3s |
| install | ✔     | ✔        | ✔           | 8.1s | 1.5s | 734ms | n/a |
| install | ✔     | ✔        |             | 18.9s | 7.8s | 10.8s | 1.9s |
| install | ✔     |          |             | 25.3s | 11.2s | 23.9s | 13.9s |
| install |       | ✔        |             | 24.5s | 15.2s | 22.9s | 13.7s |
| install | ✔     |          | ✔           | 6.8s | 1.8s | 17.7s | n/a |
| install |       | ✔        | ✔           | 7.2s | 1.5s | 722ms | n/a |
| install |       |          | ✔           | 6.8s | 3.1s | 49.9s | n/a |
| update  | n/a   | n/a      | n/a         | 10.2s | 15.6s | 41.7s | 28.7s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)