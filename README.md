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
| install |       |          |             | 36.9s | 15.5s | 40s | 27.6s |
| install | ✔     | ✔        | ✔           | 7.2s | 1.7s | 739ms | n/a |
| install | ✔     | ✔        |             | 18.1s | 7.7s | 11s | 1.8s |
| install | ✔     |          |             | 26s | 10.4s | 25.7s | 16.6s |
| install |       | ✔        |             | 23.1s | 12.7s | 22.8s | 14.2s |
| install | ✔     |          | ✔           | 6.6s | 2.6s | 19.1s | n/a |
| install |       | ✔        | ✔           | 8.1s | 1.6s | 734ms | n/a |
| install |       |          | ✔           | 6.9s | 4.5s | 38s | n/a |
| update  | n/a   | n/a      | n/a         | 7.3s | 11.8s | 33.3s | 27.9s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)