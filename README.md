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
| install |       |          |             | 23.7s | 18s | 19.9s | 16.1s |
| install | ✔     | ✔        | ✔           | 6.7s | 1.7s | 801ms | n/a |
| install | ✔     | ✔        |             | 16.2s | 6.7s | 5.4s | 1.8s |
| install | ✔     |          |             | 23.9s | 10.5s | 9.9s | 6.3s |
| install |       | ✔        |             | 20.5s | 16s | 14.4s | 10.6s |
| install | ✔     |          | ✔           | 7.9s | 2s | 8.5s | n/a |
| install |       | ✔        | ✔           | 7.1s | 1.3s | 797ms | n/a |
| install |       |          | ✔           | 7.3s | 4.4s | 21s | n/a |
| update  | n/a   | n/a      | n/a         | 7.2s | 15.8s | 19.6s | 16.2s |

![Graph of the react-app results](./results/imgs/react-app.svg)

## Ember App

The app's `package.json` [here](./fixtures/ember-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 23.8s | 16.1s | 19.9s | 14.3s |
| install | ✔     | ✔        | ✔           | 5.8s | 1.2s | 698ms | n/a |
| install | ✔     | ✔        |             | 12.1s | 5.7s | 5.1s | 1.7s |
| install | ✔     |          |             | 16.2s | 9.2s | 10.1s | 7.3s |
| install |       | ✔        |             | 14.6s | 15.9s | 12.2s | 9.6s |
| install | ✔     |          | ✔           | 5.7s | 1.4s | 8.3s | n/a |
| install |       | ✔        | ✔           | 5.8s | 1.3s | 692ms | n/a |
| install |       |          | ✔           | 5.8s | 2.5s | 17.1s | n/a |
| update  | n/a   | n/a      | n/a         | 5.9s | 14.3s | 21.1s | 12s |

![Graph of the ember-quickstart results](./results/imgs/ember-quickstart.svg)

## Angular App

The app's `package.json` [here](./fixtures/angular-quickstart/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 7.4s | 23.4s | 27.3s | 23.3s |
| install | ✔     | ✔        | ✔           | 7.7s | 1.6s | 930ms | n/a |
| install | ✔     | ✔        |             | 21.2s | 8.6s | 7.4s | 1.9s |
| install | ✔     |          |             | 25.9s | 12.7s | 14.5s | 7.7s |
| install |       | ✔        |             | 20.9s | 20.5s | 20s | 15.3s |
| install | ✔     |          | ✔           | 7.1s | 3.4s | 9.4s | n/a |
| install |       | ✔        | ✔           | 7.3s | 1.4s | 753ms | n/a |
| install |       |          | ✔           | 7.6s | 9s | 25.7s | n/a |
| update  | n/a   | n/a      | n/a         | 7.4s | 16.4s | 20.2s | 13.5s |

![Graph of the angular-quickstart results](./results/imgs/angular-quickstart.svg)

## Medium Size App

The app's `package.json` [here](./fixtures/medium-size-app/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 25.2s | 21s | 28.1s | 20.6s |
| install | ✔     | ✔        | ✔           | 6.2s | 1.6s | 768ms | n/a |
| install | ✔     | ✔        |             | 14.2s | 7.1s | 6.7s | 1.8s |
| install | ✔     |          |             | 19.5s | 10.9s | 14.5s | 11.8s |
| install |       | ✔        |             | 19.2s | 18.9s | 16.5s | 12.7s |
| install | ✔     |          | ✔           | 6.7s | 2.7s | 12.9s | n/a |
| install |       | ✔        | ✔           | 7s | 1.3s | 725ms | n/a |
| install |       |          | ✔           | 7s | 7.1s | 28.4s | n/a |
| update  | n/a   | n/a      | n/a         | 7s | 13.9s | 25s | 21.6s |

![Graph of the medium-size-app results](./results/imgs/medium-size-app.svg)

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 6.5s | 22.4s | 36.2s | 59.1s |
| install | ✔     | ✔        | ✔           | 7.4s | 1.7s | 775ms | n/a |
| install | ✔     | ✔        |             | 22.6s | 7.6s | 10.3s | 1.8s |
| install | ✔     |          |             | 36.8s | 11.8s | 23.8s | 13.1s |
| install |       | ✔        |             | 23.5s | 17.7s | 21.8s | 13s |
| install | ✔     |          | ✔           | 7.2s | 3.5s | 15.5s | n/a |
| install |       | ✔        | ✔           | 6.8s | 1.5s | 743ms | n/a |
| install |       |          | ✔           | 6.7s | 7.3s | 33s | n/a |
| update  | n/a   | n/a      | n/a         | 7s | 17s | 36.8s | 26.7s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)