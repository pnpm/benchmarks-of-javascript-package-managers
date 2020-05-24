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
| install |       |          |             | 27.5s | 14.4s | 20.2s | 15.4s |
| install | ✔     | ✔        | ✔           | 7.1s | 1.4s | 807ms | n/a |
| install | ✔     | ✔        |             | 16.3s | 6.6s | 5.6s | 1.7s |
| install | ✔     |          |             | 21s | 9.3s | 10.9s | 6.3s |
| install |       | ✔        |             | 20s | 12.3s | 15.2s | 10.6s |
| install | ✔     |          | ✔           | 6.6s | 1s | 8s | n/a |
| install |       | ✔        | ✔           | 6.9s | 1.4s | 785ms | n/a |
| install |       |          | ✔           | 6.9s | 1.3s | 20.4s | n/a |
| update  | n/a   | n/a      | n/a         | 7.2s | 12.3s | 23.6s | 17.3s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 21s | 12.3s | 18.1s | 15.7s |
| install | ✔     | ✔        | ✔           | 6.7s | 1.3s | 652ms | n/a |
| install | ✔     | ✔        |             | 11.7s | 5.3s | 4.3s | 1.6s |
| install | ✔     |          |             | 15.7s | 7.7s | 9.5s | 6.8s |
| install |       | ✔        |             | 15.1s | 10.6s | 12.4s | 9.8s |
| install | ✔     |          | ✔           | 5.3s | 1.1s | 9s | n/a |
| install |       | ✔        | ✔           | 5.5s | 1.3s | 658ms | n/a |
| install |       |          | ✔           | 5.5s | 1.2s | 17.3s | n/a |
| update  | n/a   | n/a      | n/a         | 5.7s | 10.4s | 18.2s | 14.3s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 31.3s | 18.3s | 29.1s | 23.1s |
| install | ✔     | ✔        | ✔           | 7.3s | 1.5s | 795ms | n/a |
| install | ✔     | ✔        |             | 18s | 8.8s | 7.5s | 1.8s |
| install | ✔     |          |             | 23.1s | 11.5s | 14.1s | 8.3s |
| install |       | ✔        |             | 23s | 16.3s | 21s | 14.3s |
| install | ✔     |          | ✔           | 7.1s | 2.3s | 11.3s | n/a |
| install |       | ✔        | ✔           | 7.4s | 1.4s | 764ms | n/a |
| install |       |          | ✔           | 7s | 4.2s | 26.8s | n/a |
| update  | n/a   | n/a      | n/a         | 7.6s | 14.9s | 20.8s | 12.3s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 26.6s | 14.7s | 28.1s | 20.9s |
| install | ✔     | ✔        | ✔           | 7s | 1.4s | 669ms | n/a |
| install | ✔     | ✔        |             | 14.2s | 6.8s | 5.7s | 1.7s |
| install | ✔     |          |             | 19.9s | 9.3s | 12.8s | 9.5s |
| install |       | ✔        |             | 17.5s | 12.6s | 16.5s | 12.9s |
| install | ✔     |          | ✔           | 6s | 1.4s | 11s | n/a |
| install |       | ✔        | ✔           | 6s | 1.4s | 661ms | n/a |
| install |       |          | ✔           | 6.3s | 2.3s | 23.8s | n/a |
| update  | n/a   | n/a      | n/a         | 6.2s | 12.2s | 22.2s | 20.8s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 43.3s | 17.5s | 36.7s | 28.6s |
| install | ✔     | ✔        | ✔           | 7s | 1.5s | 735ms | n/a |
| install | ✔     | ✔        |             | 18.3s | 7.8s | 10.5s | 1.8s |
| install | ✔     |          |             | 24.8s | 10.9s | 22.2s | 12.1s |
| install |       | ✔        |             | 23.2s | 15.2s | 22.4s | 13.4s |
| install | ✔     |          | ✔           | 6.4s | 1.8s | 17.1s | n/a |
| install |       | ✔        | ✔           | 7.3s | 1.5s | 735ms | n/a |
| install |       |          | ✔           | 6.4s | 3.1s | 33.2s | n/a |
| update  | n/a   | n/a      | n/a         | 7s | 14.5s | 42.6s | 27.6s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)