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
| install |       |          |             | 23.4s | 22.9s | 17.1s | 22.1s |
| install | ✔     | ✔        | ✔           | 6.6s | 1.4s | 641ms | 1.1s |
| install | ✔     | ✔        |             | 14.7s | 7.1s | 4.4s | 2.3s |
| install | ✔     |          |             | 20.6s | 11.7s | 8.6s | 9.8s |
| install |       | ✔        |             | 18s | 19.3s | 12.3s | 15s |
| install | ✔     |          | ✔           | 6.4s | 1.9s | 7.7s | 5.4s |
| install |       | ✔        | ✔           | 6.6s | 1.4s | 673ms | 14.2s |
| install |       |          | ✔           | 6.5s | 4.5s | 18.2s | 17.1s |
| update  | n/a   | n/a      | n/a         | 6.7s | 19.2s | 19.1s | 24.2s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 20.3s | 19.4s | 18.9s | 33.6s |
| install | ✔     | ✔        | ✔           | 5.3s | 1.2s | 501ms | 1.1s |
| install | ✔     | ✔        |             | 11s | 5.8s | 3.6s | 2.5s |
| install | ✔     |          |             | 15.2s | 9.6s | 9s | 8.6s |
| install |       | ✔        |             | 13.6s | 17s | 10.3s | 16.5s |
| install | ✔     |          | ✔           | 5.2s | 1.4s | 7.2s | 3.9s |
| install |       | ✔        | ✔           | 5.4s | 1.3s | 500ms | 14.9s |
| install |       |          | ✔           | 5.3s | 2.4s | 17.3s | 17.5s |
| update  | n/a   | n/a      | n/a         | 5.6s | 16.9s | 15.3s | 18.4s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 12.2s | 29.3s | 22.8s | 1m 5.9s |
| install | ✔     | ✔        | ✔           | 6.9s | 1.5s | 581ms | 1.7s |
| install | ✔     | ✔        |             | 18.3s | 8.9s | 5.8s | 3.1s |
| install | ✔     |          |             | 22.1s | 13.5s | 13.1s | 11.1s |
| install |       | ✔        |             | 19.3s | 24.6s | 16.3s | 34.4s |
| install | ✔     |          | ✔           | 6.3s | 3.3s | 8.6s | 6.2s |
| install |       | ✔        | ✔           | 6.6s | 1.5s | 535ms | 32.4s |
| install |       |          | ✔           | 6.4s | 9.4s | 23.5s | 35.2s |
| update  | n/a   | n/a      | n/a         | 6.6s | 20.1s | 17.5s | 42.5s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 23.7s | 23.5s | 22.8s | 49.5s |
| install | ✔     | ✔        | ✔           | 5.8s | 1.6s | 490ms | 1.6s |
| install | ✔     | ✔        |             | 13.2s | 7.4s | 4.3s | 3.1s |
| install | ✔     |          |             | 18.6s | 11.6s | 12.6s | 10.8s |
| install |       | ✔        |             | 16.7s | 19.9s | 13.3s | 26.7s |
| install | ✔     |          | ✔           | 5.8s | 2.4s | 9.7s | 5.1s |
| install |       | ✔        | ✔           | 6.1s | 1.3s | 486ms | 23.8s |
| install |       |          | ✔           | 6.1s | 7.1s | 21.5s | 29.6s |
| update  | n/a   | n/a      | n/a         | 6.1s | 16.3s | 15.2s | 32.3s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 13.5s | 26.4s | 37.5s | 42s |
| install | ✔     | ✔        | ✔           | 6.6s | 1.5s | 558ms | 1.4s |
| install | ✔     | ✔        |             | 19s | 7.6s | 7.4s | 3s |
| install | ✔     |          |             | 28.2s | 12.7s | 17.8s | 10.6s |
| install |       | ✔        |             | 20.2s | 21s | 16.5s | 22.2s |
| install | ✔     |          | ✔           | 6.1s | 3.3s | 13.3s | 5.4s |
| install |       | ✔        | ✔           | 6.2s | 1.5s | 511ms | 19.6s |
| install |       |          | ✔           | 5.7s | 7.4s | 28.3s | 22.9s |
| update  | n/a   | n/a      | n/a         | 6.2s | 19.5s | 25.8s | 50.9s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)