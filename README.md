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
| install |       |          |             | 23.9s | 16.8s | 18.7s | 15.6s |
| install | ✔     | ✔        | ✔           | 6.7s | 1000ms | 826ms | n/a |
| install | ✔     | ✔        |             | 13.8s | 4.8s | 4.5s | 1.7s |
| install | ✔     |          |             | 19s | 8.8s | 10s | 6.4s |
| install |       | ✔        |             | 16.1s | 14.4s | 12.9s | 9.5s |
| install | ✔     |          | ✔           | 6.2s | 1.8s | 7.6s | n/a |
| install |       | ✔        | ✔           | 6.8s | 1s | 807ms | n/a |
| install |       |          | ✔           | 6.2s | 4.3s | 17.8s | n/a |
| update  | n/a   | n/a      | n/a         | 6.5s | 21.6s | 19.5s | 16.7s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 23.1s | 14.9s | 17.5s | 15.1s |
| install | ✔     | ✔        | ✔           | 5.4s | 988ms | 727ms | n/a |
| install | ✔     | ✔        |             | 11.2s | 4.4s | 3.9s | 1.7s |
| install | ✔     |          |             | 14.8s | 7.7s | 11.5s | 8s |
| install |       | ✔        |             | 13s | 12.1s | 11.8s | 8.9s |
| install | ✔     |          | ✔           | 5.2s | 1.4s | 10.2s | n/a |
| install |       | ✔        | ✔           | 5.6s | 988ms | 698ms | n/a |
| install |       |          | ✔           | 6.2s | 2.3s | 17.9s | n/a |
| update  | n/a   | n/a      | n/a         | 5.4s | 16.3s | 15.3s | 13.9s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 26.5s | 22.9s | 25.7s | 21.2s |
| install | ✔     | ✔        | ✔           | 6.7s | 1.1s | 781ms | n/a |
| install | ✔     | ✔        |             | 15.4s | 6.5s | 5.7s | 1.8s |
| install | ✔     |          |             | 20.8s | 11.2s | 14s | 9.9s |
| install |       | ✔        |             | 19.4s | 18.6s | 16.9s | 13.1s |
| install | ✔     |          | ✔           | 6.4s | 3.5s | 11.1s | n/a |
| install |       | ✔        | ✔           | 7s | 1s | 790ms | n/a |
| install |       |          | ✔           | 6.6s | 8.9s | 24.4s | n/a |
| update  | n/a   | n/a      | n/a         | 7.1s | 17.2s | 18.6s | 13.8s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 24.5s | 17.8s | 22.4s | 19.7s |
| install | ✔     | ✔        | ✔           | 6s | 958ms | 714ms | n/a |
| install | ✔     | ✔        |             | 12.1s | 5.4s | 4.6s | 1.7s |
| install | ✔     |          |             | 17.8s | 8.9s | 15.9s | 12.3s |
| install |       | ✔        |             | 16.1s | 15.1s | 12.7s | 10s |
| install | ✔     |          | ✔           | 5.8s | 2.5s | 13.8s | n/a |
| install |       | ✔        | ✔           | 6.3s | 1s | 695ms | n/a |
| install |       |          | ✔           | 5.9s | 7s | 22s | n/a |
| update  | n/a   | n/a      | n/a         | 6.3s | 18.5s | 21.2s | 18s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 34.8s | 20s | 34.5s | 24.6s |
| install | ✔     | ✔        | ✔           | 7s | 1.1s | 794ms | n/a |
| install | ✔     | ✔        |             | 15.3s | 5.5s | 8.2s | 2s |
| install | ✔     |          |             | 22.2s | 10.1s | 21.3s | 13.7s |
| install |       | ✔        |             | 20.3s | 17s | 16.9s | 11.2s |
| install | ✔     |          | ✔           | 6s | 2.8s | 19s | n/a |
| install |       | ✔        | ✔           | 7s | 1.1s | 812ms | n/a |
| install |       |          | ✔           | 6s | 6.7s | 33.1s | n/a |
| update  | n/a   | n/a      | n/a         | 6.7s | 24.8s | 30.7s | 22.6s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)