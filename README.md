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
| install |       |          |             | 42.9s | 16.6s | 44.2s | 32.6s |
| install | ✔     | ✔        | ✔           | 8.2s | 1.9s | 725ms | n/a |
| install | ✔     | ✔        |             | 20.4s | 7.9s | 12.6s | 1.8s |
| install | ✔     |          |             | 30.8s | 11.1s | 29.9s | 17.7s |
| install |       | ✔        |             | 26s | 13.3s | 25.7s | 16.1s |
| install | ✔     |          | ✔           | 7s | 3s | 20.6s | n/a |
| install |       | ✔        | ✔           | 7.7s | 1.8s | 896ms | n/a |
| install |       |          | ✔           | 7.9s | 5s | 41.9s | n/a |
| update  | n/a   | n/a      | n/a         | 7.9s | 13.3s | 38.7s | 31.4s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)