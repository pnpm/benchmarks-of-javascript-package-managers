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

| action  | cache | lockfile | node_modules| npm | Yarn | Yarn PnP | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 23.1s | 18.5s | 14.9s | 17.9s |
| install | ✔     | ✔        | ✔           | 7s | 872ms | n/a | 1.1s |
| install | ✔     | ✔        |             | 13.7s | 5s | 1.7s | 5.1s |
| install | ✔     |          |             | 16s | 10.5s | 5.7s | 9.2s |
| install |       | ✔        |             | 18.1s | 13s | 10s | 15.1s |
| install | ✔     |          | ✔           | 6.8s | 7.5s | n/a | 2.1s |
| install |       | ✔        | ✔           | 7.2s | 823ms | n/a | 1.1s |
| install |       |          | ✔           | 6.8s | 17.5s | n/a | 4.2s |
| update  | n/a   | n/a      | n/a         | 7.2s | 19s | 14.8s | 22s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | Yarn PnP | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 23.3s | 17.3s | 14.6s | 15.3s |
| install | ✔     | ✔        | ✔           | 6.1s | 761ms | n/a | 1.1s |
| install | ✔     | ✔        |             | 10.7s | 4.1s | 1.8s | 4.4s |
| install | ✔     |          |             | 13s | 9.1s | 6.5s | 7.6s |
| install |       | ✔        |             | 14.4s | 10.9s | 8.7s | 12.4s |
| install | ✔     |          | ✔           | 5.7s | 7.5s | n/a | 1.4s |
| install |       | ✔        | ✔           | 6.1s | 732ms | n/a | 1.1s |
| install |       |          | ✔           | 5.8s | 16.2s | n/a | 2.3s |
| update  | n/a   | n/a      | n/a         | 5.8s | 14.9s | 11.6s | 17.2s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | Yarn PnP | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 26.2s | 25s | 21.1s | 23.3s |
| install | ✔     | ✔        | ✔           | 7.4s | 906ms | n/a | 1.2s |
| install | ✔     | ✔        |             | 16.2s | 6.5s | 1.9s | 6.5s |
| install | ✔     |          |             | 18.7s | 11.6s | 8.6s | 10.5s |
| install |       | ✔        |             | 20.3s | 17.6s | 13.1s | 19.6s |
| install | ✔     |          | ✔           | 7s | 9.6s | n/a | 7.7s |
| install |       | ✔        | ✔           | 7.5s | 816ms | n/a | 1.3s |
| install |       |          | ✔           | 7s | 24s | n/a | 18.6s |
| update  | n/a   | n/a      | n/a         | 7.5s | 18.1s | 11.8s | 15.4s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | Yarn PnP | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 22.8s | 24.5s | 19.6s | 18.8s |
| install | ✔     | ✔        | ✔           | 6.3s | 766ms | n/a | 1.1s |
| install | ✔     | ✔        |             | 12.6s | 5s | 1.8s | 5.4s |
| install | ✔     |          |             | 15.8s | 13.2s | 8.8s | 8.8s |
| install |       | ✔        |             | 16.7s | 14.5s | 10.7s | 15.6s |
| install | ✔     |          | ✔           | 9.6s | 10.5s | n/a | 2.8s |
| install |       | ✔        | ✔           | 6.7s | 742ms | n/a | 1.1s |
| install |       |          | ✔           | 6.3s | 20.6s | n/a | 7s |
| update  | n/a   | n/a      | n/a         | 6.5s | 20.9s | 16.3s | 18s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | Yarn PnP | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 34.7s | 29.9s | 22.4s | 21.4s |
| install | ✔     | ✔        | ✔           | 7.1s | 823ms | n/a | 1.4s |
| install | ✔     | ✔        |             | 16.4s | 8.3s | 1.9s | 5.7s |
| install | ✔     |          |             | 19.1s | 22.8s | 11.6s | 10.5s |
| install |       | ✔        |             | 21.6s | 17.6s | 11.8s | 17.7s |
| install | ✔     |          | ✔           | 6.8s | 14s | n/a | 3.1s |
| install |       | ✔        | ✔           | 7.5s | 776ms | n/a | 1.2s |
| install |       |          | ✔           | 6.7s | 30.4s | n/a | 7.2s |
| update  | n/a   | n/a      | n/a         | 6.8s | 25.7s | 22.7s | 25s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)