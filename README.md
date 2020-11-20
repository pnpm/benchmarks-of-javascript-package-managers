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

## Lots of Files

The app's `package.json` [here](./fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 37.9s | 15s | 39.4s | 29.9s |
| install | ✔     | ✔        | ✔           | 7.2s | 1.4s | 751ms | n/a |
| install | ✔     | ✔        |             | 18s | 4.3s | 11.4s | 1.8s |
| install | ✔     |          |             | 25.2s | 7.1s | 26.8s | 16.8s |
| install |       | ✔        |             | 23s | 11s | 23.9s | 14.6s |
| install | ✔     |          | ✔           | 6.8s | 1.6s | 19.5s | n/a |
| install |       | ✔        | ✔           | 7.3s | 1.4s | 750ms | n/a |
| install |       |          | ✔           | 6.7s | 4.6s | 38.6s | n/a |
| update  | n/a   | n/a      | n/a         | 7.2s | 11.5s | 33.9s | 27.6s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)