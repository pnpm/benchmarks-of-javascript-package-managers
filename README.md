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
| install |       |          |             | 34s | 14.1s | 33.4s | 22.8s |
| install | ✔     | ✔        | ✔           | 7.4s | 1.5s | 734ms | n/a |
| install | ✔     | ✔        |             | 17.3s | 3.9s | 10.7s | 1.8s |
| install | ✔     |          |             | 23.7s | 6.5s | 21.5s | 11.9s |
| install |       | ✔        |             | 21.7s | 11.4s | 22.1s | 13.4s |
| install | ✔     |          | ✔           | 6.6s | 1.8s | 16.7s | n/a |
| install |       | ✔        | ✔           | 7.2s | 1.4s | 722ms | n/a |
| install |       |          | ✔           | 6.5s | 5.6s | 32.8s | n/a |
| update  | n/a   | n/a      | n/a         | 7.1s | 10.9s | 31.5s | 23.4s |

![Graph of the alotta-files results](./results/imgs/alotta-files.svg)