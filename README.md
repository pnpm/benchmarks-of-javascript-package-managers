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
| install |       |          |             | 28.2s | 14s | 20.2s | 16.2s |
| install | ✔     | ✔        | ✔           | 7.1s | 1.4s | 759ms | n/a |
| install | ✔     | ✔        |             | 15.5s | 6.4s | 5.5s | 1.6s |
| install | ✔     |          |             | 20.7s | 8.7s | 10.4s | 6.4s |
| install |       | ✔        |             | 18.7s | 11.6s | 14.5s | 11s |
| install | ✔     |          | ✔           | 6.3s | 1.1s | 8.1s | n/a |
| install |       | ✔        | ✔           | 6.6s | 1.5s | 806ms | n/a |
| install |       |          | ✔           | 6.6s | 1.5s | 20s | n/a |
| update  | n/a   | n/a      | n/a         | 6.9s | 12.1s | 22.1s | 18.4s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 20.9s | 12.4s | 18.6s | 15.6s |
| install | ✔     | ✔        | ✔           | 5.9s | 1.3s | 699ms | n/a |
| install | ✔     | ✔        |             | 11.5s | 5.5s | 4.4s | 1.6s |
| install | ✔     |          |             | 15.6s | 8.2s | 9.8s | 7.2s |
| install |       | ✔        |             | 15.2s | 10.4s | 12s | 10.2s |
| install | ✔     |          | ✔           | 5.1s | 1.1s | 8.2s | n/a |
| install |       | ✔        | ✔           | 5.3s | 1.3s | 684ms | n/a |
| install |       |          | ✔           | 5.4s | 1.4s | 17.3s | n/a |
| update  | n/a   | n/a      | n/a         | 5.8s | 10s | 18.1s | 13.8s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 31.3s | 18.7s | 28.8s | 23.2s |
| install | ✔     | ✔        | ✔           | 7.1s | 1.5s | 787ms | n/a |
| install | ✔     | ✔        |             | 17.4s | 9s | 7.9s | 1.8s |
| install | ✔     |          |             | 22.1s | 11.3s | 14.7s | 8.9s |
| install |       | ✔        |             | 22s | 15.6s | 21.2s | 14.6s |
| install | ✔     |          | ✔           | 6.4s | 2.6s | 11.1s | n/a |
| install |       | ✔        | ✔           | 7s | 1.4s | 786ms | n/a |
| install |       |          | ✔           | 7.2s | 4.6s | 29.6s | n/a |
| update  | n/a   | n/a      | n/a         | 7.9s | 14.3s | 20.2s | 13.3s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 27s | 14.7s | 25.7s | 20.6s |
| install | ✔     | ✔        | ✔           | 6.4s | 1.4s | 684ms | n/a |
| install | ✔     | ✔        |             | 14.3s | 6.9s | 5.9s | 1.7s |
| install | ✔     |          |             | 19.6s | 9.2s | 13.1s | 10.9s |
| install |       | ✔        |             | 17.8s | 12.4s | 16.2s | 12.8s |
| install | ✔     |          | ✔           | 6s | 1.8s | 13.7s | n/a |
| install |       | ✔        | ✔           | 6s | 1.4s | 644ms | n/a |
| install |       |          | ✔           | 5.9s | 3.5s | 24.9s | n/a |
| update  | n/a   | n/a      | n/a         | 6.3s | 11.5s | 20.9s | 22.8s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 37.7s | 15.8s | 32.4s | 26.5s |
| install | ✔     | ✔        | ✔           | 6.9s | 1.4s | 714ms | n/a |
| install | ✔     | ✔        |             | 18.4s | 7.3s | 10.3s | 1.8s |
| install | ✔     |          |             | 25.8s | 10.3s | 21.3s | 13.2s |
| install |       | ✔        |             | 22.6s | 13s | 21.3s | 13s |
| install | ✔     |          | ✔           | 6.7s | 2.3s | 17.7s | n/a |
| install |       | ✔        | ✔           | 6.9s | 1.5s | 738ms | n/a |
| install |       |          | ✔           | 6.7s | 4.6s | 32.8s | n/a |
| update  | n/a   | n/a      | n/a         | 7s | 12.9s | 37.4s | 25.5s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)