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
| install |       |          |             | 25.2s | 17.8s | 21.3s | 16.6s |
| install | ✔     | ✔        | ✔           | 7.1s | 1.3s | 900ms | n/a |
| install | ✔     | ✔        |             | 15.5s | 6.1s | 5.5s | 1.7s |
| install | ✔     |          |             | 21.1s | 9.7s | 11.4s | 8.9s |
| install |       | ✔        |             | 19.3s | 16.7s | 15.7s | 11.4s |
| install | ✔     |          | ✔           | 7.4s | 7.2s | 8.1s | n/a |
| install |       | ✔        | ✔           | 7.2s | 1.5s | 779ms | n/a |
| install |       |          | ✔           | 6.8s | 14.8s | 26s | n/a |
| update  | n/a   | n/a      | n/a         | 6.7s | 20.4s | 21.2s | 20s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 32.8s | 14.8s | 20.7s | 16.1s |
| install | ✔     | ✔        | ✔           | 5.5s | 1.3s | 737ms | n/a |
| install | ✔     | ✔        |             | 10.8s | 5.4s | 4.1s | 1.6s |
| install | ✔     |          |             | 16.4s | 8.7s | 11.3s | 8.3s |
| install |       | ✔        |             | 12.8s | 13.7s | 12.6s | 11.6s |
| install | ✔     |          | ✔           | 10.4s | 5.9s | 10.3s | n/a |
| install |       | ✔        | ✔           | 5.6s | 1.2s | 645ms | n/a |
| install |       |          | ✔           | 5.5s | 12.1s | 19.5s | n/a |
| update  | n/a   | n/a      | n/a         | 5.3s | 13.9s | 26.9s | 14.4s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 30s | 21.8s | 27.3s | 21.8s |
| install | ✔     | ✔        | ✔           | 6.9s | 1.3s | 804ms | n/a |
| install | ✔     | ✔        |             | 15.3s | 8.2s | 7s | 1.7s |
| install | ✔     |          |             | 22.7s | 12.1s | 17.3s | 9.6s |
| install |       | ✔        |             | 19.5s | 19.9s | 19.8s | 14.3s |
| install | ✔     |          | ✔           | 6.5s | 7.8s | 14.3s | n/a |
| install |       | ✔        | ✔           | 7.1s | 1.4s | 889ms | n/a |
| install |       |          | ✔           | 6.5s | 17.6s | 30.1s | n/a |
| update  | n/a   | n/a      | n/a         | 6.9s | 15.8s | 19.2s | 13s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 27.9s | 18.8s | 25.5s | 20.8s |
| install | ✔     | ✔        | ✔           | 5.7s | 1.3s | 654ms | n/a |
| install | ✔     | ✔        |             | 12.1s | 6.3s | 5.1s | 1.6s |
| install | ✔     |          |             | 18.4s | 12.8s | 15.8s | 13.8s |
| install |       | ✔        |             | 15.3s | 16.1s | 14.9s | 12.1s |
| install | ✔     |          | ✔           | 5.6s | 6.8s | 14.1s | n/a |
| install |       | ✔        | ✔           | 5.8s | 1.3s | 659ms | n/a |
| install |       |          | ✔           | 5.7s | 14.4s | 25.2s | n/a |
| update  | n/a   | n/a      | n/a         | 6.3s | 15.4s | 19.2s | 18.6s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 43.8s | 19.7s | 35.5s | 30.9s |
| install | ✔     | ✔        | ✔           | 6.3s | 1.4s | 717ms | n/a |
| install | ✔     | ✔        |             | 15.7s | 7.2s | 9.4s | 1.7s |
| install | ✔     |          |             | 23.7s | 12.3s | 20.9s | 21.4s |
| install |       | ✔        |             | 19.5s | 17s | 19.9s | 12.2s |
| install | ✔     |          | ✔           | 6.4s | 7.8s | 23.2s | n/a |
| install |       | ✔        | ✔           | 11.4s | 1.4s | 675ms | n/a |
| install |       |          | ✔           | 5.6s | 16s | 35.2s | n/a |
| update  | n/a   | n/a      | n/a         | 11.8s | 21.6s | 35.1s | 26.1s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)