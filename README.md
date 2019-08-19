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
| install |       |          |             | 22.2s | 17.1s | 18.6s | 16.2s |
| install | ✔     | ✔        | ✔           | 7s | 1s | 843ms | n/a |
| install | ✔     | ✔        |             | 14.4s | 4.9s | 4.6s | 1.7s |
| install | ✔     |          |             | 19.3s | 9.1s | 9.8s | 6.4s |
| install |       | ✔        |             | 16.1s | 14.8s | 12.8s | 9.5s |
| install | ✔     |          | ✔           | 6.3s | 1.8s | 7.4s | n/a |
| install |       | ✔        | ✔           | 6.9s | 1s | 821ms | n/a |
| install |       |          | ✔           | 6.3s | 4.3s | 17.5s | n/a |
| update  | n/a   | n/a      | n/a         | 6.6s | 21.8s | 19.2s | 16.4s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 25.7s | 16.2s | 18.3s | 15.6s |
| install | ✔     | ✔        | ✔           | 5.5s | 992ms | 734ms | n/a |
| install | ✔     | ✔        |             | 11.9s | 4.7s | 4s | 1.8s |
| install | ✔     |          |             | 15.1s | 8.3s | 11.1s | 8.2s |
| install |       | ✔        |             | 13.2s | 12.8s | 12.8s | 9.2s |
| install | ✔     |          | ✔           | 5.2s | 1.3s | 10.5s | n/a |
| install |       | ✔        | ✔           | 5.6s | 1s | 696ms | n/a |
| install |       |          | ✔           | 5.3s | 2.4s | 19.8s | n/a |
| update  | n/a   | n/a      | n/a         | 5.4s | 16.2s | 15.6s | 13.3s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 27.7s | 24.3s | 26.2s | 20.7s |
| install | ✔     | ✔        | ✔           | 6.7s | 1.2s | 788ms | n/a |
| install | ✔     | ✔        |             | 16.1s | 6.8s | 5.8s | 1.8s |
| install | ✔     |          |             | 21.4s | 12.2s | 15.4s | 9.2s |
| install |       | ✔        |             | 20.1s | 19s | 17.5s | 13.8s |
| install | ✔     |          | ✔           | 6.5s | 3.6s | 10.4s | n/a |
| install |       | ✔        | ✔           | 7.2s | 980ms | 795ms | n/a |
| install |       |          | ✔           | 7s | 9.5s | 26s | n/a |
| update  | n/a   | n/a      | n/a         | 7.1s | 18.5s | 18.7s | 16.3s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 26.7s | 17.5s | 23s | 21.3s |
| install | ✔     | ✔        | ✔           | 6.1s | 975ms | 713ms | n/a |
| install | ✔     | ✔        |             | 12.4s | 5.1s | 4.7s | 1.7s |
| install | ✔     |          |             | 18s | 8.7s | 14.9s | 13s |
| install |       | ✔        |             | 15.9s | 14.5s | 12.7s | 9.8s |
| install | ✔     |          | ✔           | 5.7s | 2.5s | 13.9s | n/a |
| install |       | ✔        | ✔           | 6.1s | 986ms | 681ms | n/a |
| install |       |          | ✔           | 5.8s | 6.9s | 21.7s | n/a |
| update  | n/a   | n/a      | n/a         | 6.1s | 19.3s | 24.8s | 19.8s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 35.5s | 18.9s | 37s | 26.2s |
| install | ✔     | ✔        | ✔           | 7.2s | 1.1s | 764ms | n/a |
| install | ✔     | ✔        |             | 15.2s | 5.3s | 8.4s | 1.8s |
| install | ✔     |          |             | 22.2s | 10.2s | 21.9s | 14.5s |
| install |       | ✔        |             | 20.4s | 15.6s | 16.6s | 10.9s |
| install | ✔     |          | ✔           | 6.2s | 2.7s | 19.6s | n/a |
| install |       | ✔        | ✔           | 6.7s | 1.1s | 783ms | n/a |
| install |       |          | ✔           | 5.9s | 6.5s | 36.7s | n/a |
| update  | n/a   | n/a      | n/a         | 6.8s | 22.6s | 31.6s | 22.9s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)