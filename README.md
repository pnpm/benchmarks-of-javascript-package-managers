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
| install |       |          |             | 22.6s | 17.5s | 17.1s |
| install | ✔     | ✔        | ✔           | 7.1s | 844ms | 1.1s |
| install | ✔     | ✔        |             | 13.5s | 4.6s | 5.1s |
| install | ✔     |          |             | 16.9s | 8.8s | 8.9s |
| install |       | ✔        |             | 16.6s | 12.6s | 15.3s |
| install | ✔     |          | ✔           | 6.9s | 7.6s | 2.1s |
| install |       | ✔        | ✔           | 7s | 852ms | 1.1s |
| install |       |          | ✔           | 6.7s | 16.9s | 4.4s |
| update  | n/a   | n/a      | n/a         | 6.9s | 21.3s | 21.7s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 24.1s | 16.6s | 14.2s |
| install | ✔     | ✔        | ✔           | 6.1s | 773ms | 1s |
| install | ✔     | ✔        |             | 10.8s | 3.8s | 4.3s |
| install | ✔     |          |             | 12.6s | 8.9s | 7.4s |
| install |       | ✔        |             | 13.9s | 10.7s | 11.8s |
| install | ✔     |          | ✔           | 5.8s | 8.2s | 1.5s |
| install |       | ✔        | ✔           | 6.2s | 757ms | 1s |
| install |       |          | ✔           | 5.9s | 16.6s | 2.4s |
| update  | n/a   | n/a      | n/a         | 6s | 14.5s | 16.5s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 26.3s | 24s | 21.6s |
| install | ✔     | ✔        | ✔           | 7.2s | 806ms | 1.1s |
| install | ✔     | ✔        |             | 15s | 5.9s | 6.4s |
| install | ✔     |          |             | 17.6s | 12.2s | 10.5s |
| install |       | ✔        |             | 19.2s | 16.6s | 18.7s |
| install | ✔     |          | ✔           | 7s | 10.1s | 7.6s |
| install |       | ✔        | ✔           | 7.4s | 789ms | 1.3s |
| install |       |          | ✔           | 7s | 24.3s | 17.9s |
| update  | n/a   | n/a      | n/a         | 7.8s | 17.6s | 15.1s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 22.4s | 20.7s | 17.6s |
| install | ✔     | ✔        | ✔           | 6.4s | 751ms | 1.1s |
| install | ✔     | ✔        |             | 12.3s | 4.8s | 5.3s |
| install | ✔     |          |             | 15.4s | 12.9s | 8.6s |
| install |       | ✔        |             | 15.8s | 13.7s | 15.1s |
| install | ✔     |          | ✔           | 6.1s | 10.6s | 2.8s |
| install |       | ✔        | ✔           | 6.6s | 737ms | 1.1s |
| install |       |          | ✔           | 6.4s | 19.9s | 6.9s |
| update  | n/a   | n/a      | n/a         | 6.5s | 18.4s | 17.5s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
| ---     | ---   | ---      | ---         | --- | --- | --- |
| install |       |          |             | 33.1s | 28.5s | 19.7s |
| install | ✔     | ✔        | ✔           | 6.9s | 808ms | 1.2s |
| install | ✔     | ✔        |             | 16.1s | 7.8s | 5.7s |
| install | ✔     |          |             | 19.1s | 18.8s | 10.2s |
| install |       | ✔        |             | 20s | 16.9s | 16.5s |
| install | ✔     |          | ✔           | 6.3s | 15.3s | 3s |
| install |       | ✔        | ✔           | 7.6s | 782ms | 1.2s |
| install |       |          | ✔           | 6.5s | 27.7s | 6.7s |
| update  | n/a   | n/a      | n/a         | 6.9s | 26.1s | 23.7s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)