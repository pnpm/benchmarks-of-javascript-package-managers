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
| install |       |          |             | 29.8s | 13.4s | 24.1s | 19.5s |
| install | ✔     | ✔        | ✔           | 8s | 1.6s | 813ms | n/a |
| install | ✔     | ✔        |             | 16.6s | 6.8s | 5.9s | 1.8s |
| install | ✔     |          |             | 21.8s | 8.8s | 13.2s | 9s |
| install |       | ✔        |             | 19.5s | 11.1s | 17s | 12.8s |
| install | ✔     |          | ✔           | 7.1s | 1.2s | 10.5s | n/a |
| install |       | ✔        | ✔           | 7s | 1.6s | 840ms | n/a |
| install |       |          | ✔           | 7s | 1.6s | 24.3s | n/a |
| update  | n/a   | n/a      | n/a         | 7.5s | 11.5s | 27s | 20.5s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 24.4s | 12s | 22s | 18.8s |
| install | ✔     | ✔        | ✔           | 6.2s | 1.4s | 676ms | n/a |
| install | ✔     | ✔        |             | 11.8s | 5.7s | 4.7s | 1.7s |
| install | ✔     |          |             | 16.3s | 8s | 12.5s | 9.6s |
| install |       | ✔        |             | 15s | 10.3s | 13.5s | 11.3s |
| install | ✔     |          | ✔           | 5.7s | 1.2s | 10.9s | n/a |
| install |       | ✔        | ✔           | 5.8s | 1.5s | 698ms | n/a |
| install |       |          | ✔           | 5.9s | 1.6s | 21.7s | n/a |
| update  | n/a   | n/a      | n/a         | 6.4s | 9.5s | 21.3s | 16.6s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 33.7s | 17s | 32.7s | 27.4s |
| install | ✔     | ✔        | ✔           | 8s | 1.6s | 810ms | n/a |
| install | ✔     | ✔        |             | 17.7s | 9.5s | 8s | 1.9s |
| install | ✔     |          |             | 23.8s | 11.8s | 17.1s | 10.9s |
| install |       | ✔        |             | 22.3s | 15.2s | 22.5s | 17.1s |
| install | ✔     |          | ✔           | 8s | 3.2s | 13.4s | n/a |
| install |       | ✔        | ✔           | 7.5s | 1.6s | 841ms | n/a |
| install |       |          | ✔           | 7.6s | 4.9s | 32s | n/a |
| update  | n/a   | n/a      | n/a         | 7.7s | 14.4s | 24.5s | 16.3s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 28.1s | 14.9s | 30s | 24.1s |
| install | ✔     | ✔        | ✔           | 6.6s | 1.6s | 750ms | n/a |
| install | ✔     | ✔        |             | 14.8s | 7.4s | 6.6s | 1.9s |
| install | ✔     |          |             | 21.4s | 9.9s | 17.5s | 13.7s |
| install |       | ✔        |             | 19.1s | 13s | 19.1s | 14.1s |
| install | ✔     |          | ✔           | 6.3s | 2.1s | 14.6s | n/a |
| install |       | ✔        | ✔           | 6.8s | 1.6s | 747ms | n/a |
| install |       |          | ✔           | 7.2s | 3.7s | 29.1s | n/a |
| update  | n/a   | n/a      | n/a         | 7s | 11.4s | 24.3s | 22.1s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 38.7s | 16.8s | 39.3s | 31.1s |
| install | ✔     | ✔        | ✔           | 8.1s | 1.8s | 792ms | n/a |
| install | ✔     | ✔        |             | 19.1s | 8.4s | 11.3s | 2s |
| install | ✔     |          |             | 26.8s | 11.3s | 28.2s | 17.2s |
| install |       | ✔        |             | 23.8s | 14.2s | 24.4s | 14.6s |
| install | ✔     |          | ✔           | 7.3s | 2.7s | 19.9s | n/a |
| install |       | ✔        | ✔           | 8.2s | 1.7s | 777ms | n/a |
| install |       |          | ✔           | 7.4s | 5.1s | 42.6s | n/a |
| update  | n/a   | n/a      | n/a         | 7.4s | 12.7s | 33.9s | 29.3s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)