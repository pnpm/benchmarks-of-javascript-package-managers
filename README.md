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
| install |       |          |             | 43.2s | 20.6s | 43.2s | 31.2s |
| install | ✔     | ✔        | ✔           | 8.7s | 1.9s | 851ms | n/a |
| install | ✔     | ✔        |             | 21.9s | 9.5s | 12.9s | 2.2s |
| install | ✔     |          |             | 30.4s | 13.2s | 27s | 16.2s |
| install |       | ✔        |             | 28.2s | 17.5s | 28.5s | 17.8s |
| install | ✔     |          | ✔           | 7.6s | 3.1s | 19.5s | n/a |
| install |       | ✔        | ✔           | 8.5s | 1.9s | 811ms | n/a |
| install |       |          | ✔           | 7.8s | 6.1s | 43.2s | n/a |
| update  | n/a   | n/a      | n/a         | 8.2s | 15.8s | 37.8s | 30.3s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)