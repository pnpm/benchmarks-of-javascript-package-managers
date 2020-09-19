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
| install |       |          |             | 41.3s | 15s | 37.1s | 29.7s |
| install | ✔     | ✔        | ✔           | 7.7s | 1.7s | 698ms | n/a |
| install | ✔     | ✔        |             | 17.6s | 4.7s | 10.7s | 1.8s |
| install | ✔     |          |             | 24.6s | 7.6s | 26.6s | 15.7s |
| install |       | ✔        |             | 22.1s | 12.1s | 22.9s | 14.4s |
| install | ✔     |          | ✔           | 6.9s | 2s | 19s | n/a |
| install |       | ✔        | ✔           | 7.3s | 1.7s | 694ms | n/a |
| install |       |          | ✔           | 7.4s | 4.5s | 38s | n/a |
| update  | n/a   | n/a      | n/a         | 7s | 11.6s | 35s | 29.2s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)