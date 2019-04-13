# Benchmarks of JavaScript Package Managers

This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

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

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.5s | 17.4s | 16.8s |
| install | ✔     | ✔        | ✔           | 7.1s | 840ms | 1.1s |
| install | ✔     | ✔        |             | 13.3s | 4.6s | 5s |
| install | ✔     |          |             | 15.8s | 8.9s | 8.7s |
| install |       | ✔        |             | 16.7s | 12.7s | 14s |
| install | ✔     |          | ✔           | 6.7s | 8.2s | 2.1s |
| install |       | ✔        | ✔           | 7s | 829ms | 1.1s |
| install |       |          | ✔           | 6.7s | 17.7s | 4.3s |
| update  | n/a   | n/a      | n/a         | 6.9s | 18.7s | 20.8s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.5s | 16.6s | 14.4s |
| install | ✔     | ✔        | ✔           | 5.9s | 768ms | 1.1s |
| install | ✔     | ✔        |             | 10.3s | 3.9s | 4.4s |
| install | ✔     |          |             | 12.5s | 9.1s | 7.8s |
| install |       | ✔        |             | 13.5s | 10.9s | 11.8s |
| install | ✔     |          | ✔           | 5.9s | 7.9s | 1.5s |
| install |       | ✔        | ✔           | 6.2s | 744ms | 1.1s |
| install |       |          | ✔           | 5.9s | 16s | 2.4s |
| update  | n/a   | n/a      | n/a         | 5.9s | 15.4s | 16.4s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26.3s | 25.2s | 21.4s |
| install | ✔     | ✔        | ✔           | 7.4s | 828ms | 1.2s |
| install | ✔     | ✔        |             | 15.2s | 5.9s | 6.4s |
| install | ✔     |          |             | 17.6s | 11.8s | 10.5s |
| install |       | ✔        |             | 19.5s | 16.9s | 18.3s |
| install | ✔     |          | ✔           | 7.1s | 9.8s | 7.4s |
| install |       | ✔        | ✔           | 7.5s | 802ms | 1.3s |
| install |       |          | ✔           | 7s | 24.4s | 17.3s |
| update  | n/a   | n/a      | n/a         | 7.5s | 18.2s | 15.2s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 23.1s | 21.8s | 17.6s |
| install | ✔     | ✔        | ✔           | 6.4s | 759ms | 1.1s |
| install | ✔     | ✔        |             | 12.3s | 4.8s | 5.4s |
| install | ✔     |          |             | 15.5s | 13.3s | 8.8s |
| install |       | ✔        |             | 16.1s | 13.3s | 15.1s |
| install | ✔     |          | ✔           | 6.2s | 12.5s | 2.8s |
| install |       | ✔        | ✔           | 6.5s | 726ms | 1.2s |
| install |       |          | ✔           | 6.2s | 21.3s | 6.8s |
| update  | n/a   | n/a      | n/a         | 6.3s | 20s | 18.5s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 32.1s | 31.9s | 19.6s |
| install | ✔     | ✔        | ✔           | 7.5s | 814ms | 1.3s |
| install | ✔     | ✔        |             | 15.9s | 8s | 5.7s |
| install | ✔     |          |             | 18.8s | 21.4s | 9.9s |
| install |       | ✔        |             | 21.1s | 17.3s | 16.3s |
| install | ✔     |          | ✔           | 7s | 16.5s | 3.1s |
| install |       | ✔        | ✔           | 7.3s | 780ms | 1.3s |
| install |       |          | ✔           | 7.6s | 28.8s | 6.8s |
| update  | n/a   | n/a      | n/a         | 7.5s | 29.2s | 24.4s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)