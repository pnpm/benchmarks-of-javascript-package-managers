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
| install |       |          |             | 27.1s | 21.6s | 22.1s | 17.5s |
| install | ✔     | ✔        | ✔           | 7.4s | 1s | 763ms | n/a |
| install | ✔     | ✔        |             | 15.9s | 6.5s | 5.8s | 1.7s |
| install | ✔     |          |             | 21.5s | 11.2s | 11.3s | 6.5s |
| install |       | ✔        |             | 19.7s | 18.4s | 15.9s | 11.9s |
| install | ✔     |          | ✔           | 7s | 2.6s | 8.8s | n/a |
| install |       | ✔        | ✔           | 7.4s | 1s | 822ms | n/a |
| install |       |          | ✔           | 6.7s | 5s | 20.9s | n/a |
| update  | n/a   | n/a      | n/a         | 7.1s | 18.8s | 23.4s | 19.7s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 32s | 18.2s | 19.2s | 17.6s |
| install | ✔     | ✔        | ✔           | 6.2s | 1.1s | 682ms | n/a |
| install | ✔     | ✔        |             | 12.4s | 5.5s | 4.7s | 1.7s |
| install | ✔     |          |             | 17.4s | 12s | 9.9s | 7.2s |
| install |       | ✔        |             | 15.7s | 15.9s | 13.3s | 11s |
| install | ✔     |          | ✔           | 5.9s | 1.4s | 9.1s | n/a |
| install |       | ✔        | ✔           | 6.1s | 13.8s | 672ms | n/a |
| install |       |          | ✔           | 5.6s | 2.6s | 19.1s | n/a |
| update  | n/a   | n/a      | n/a         | 5.8s | 15.4s | 24.6s | 16.4s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 31.9s | 28.2s | 29.4s | 26s |
| install | ✔     | ✔        | ✔           | 7.1s | 1.1s | 768ms | n/a |
| install | ✔     | ✔        |             | 17.3s | 8.6s | 7.6s | 2s |
| install | ✔     |          |             | 23.7s | 13.6s | 14.4s | 9.7s |
| install |       | ✔        |             | 23.4s | 23.7s | 21.4s | 16.4s |
| install | ✔     |          | ✔           | 6.9s | 4.1s | 11.2s | n/a |
| install |       | ✔        | ✔           | 7.6s | 1.3s | 779ms | n/a |
| install |       |          | ✔           | 6.9s | 10.4s | 32.1s | n/a |
| update  | n/a   | n/a      | n/a         | 7.2s | 19.1s | 21.8s | 14.3s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 29.3s | 21.8s | 27.3s | 23.1s |
| install | ✔     | ✔        | ✔           | 6.7s | 1.1s | 706ms | n/a |
| install | ✔     | ✔        |             | 15.2s | 6.7s | 5.9s | 1.7s |
| install | ✔     |          |             | 21.2s | 10.5s | 14.8s | 14.5s |
| install |       | ✔        |             | 19.2s | 18.4s | 17.6s | 13.4s |
| install | ✔     |          | ✔           | 6.7s | 2.8s | 12.8s | n/a |
| install |       | ✔        | ✔           | 7s | 17.4s | 710ms | n/a |
| install |       |          | ✔           | 6.5s | 7.9s | 25.9s | n/a |
| update  | n/a   | n/a      | n/a         | 6.6s | 16.3s | 24.1s | 20.9s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 47.3s | 27.1s | 36.9s | 31.1s |
| install | ✔     | ✔        | ✔           | 8s | 1.2s | 709ms | n/a |
| install | ✔     | ✔        |             | 18.2s | 7.6s | 10.7s | 1.8s |
| install | ✔     |          |             | 24.6s | 13.2s | 22.2s | 14.8s |
| install |       | ✔        |             | 24s | 32.4s | 22.9s | 13.4s |
| install | ✔     |          | ✔           | 6.8s | 4s | 17.7s | n/a |
| install |       | ✔        | ✔           | 7.2s | 1.5s | 702ms | n/a |
| install |       |          | ✔           | 6.9s | 11.5s | 53.1s | n/a |
| update  | n/a   | n/a      | n/a         | 11.8s | 24.2s | 40.3s | 28.5s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)