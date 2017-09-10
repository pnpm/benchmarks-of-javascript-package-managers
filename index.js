'use strict'
const fs = require('fs')
const stripIndents = require('common-tags').stripIndents
const prettyMs = require('pretty-ms')
const benchmark = require('./lib/recordBenchmark')
const generateSvg = require('./lib/generateSvg')

const LIMIT_RUNS = 3

const fixtures = [
  {
    name: 'react-app',
    mdDesc: '## React app\n\nThe app\'s `package.json` [here](./fixtures/react-app/package.json)'
  },
  {
    name: 'ember-quickstart',
    mdDesc: '## Ember app\n\nThe app\'s `package.json` [here](./fixtures/ember-quickstart/package.json)'
  },
  {
    name: 'angular-quickstart',
    mdDesc: '## Angular app\n\nThe app\'s `package.json` [here](./fixtures/angular-quickstart/package.json)'
  }
]

run()
  .then(() => console.log('done'))
  .catch(err => console.error(err))

async function run () {
  const sections = []
  for (const fixture of fixtures) {
    const npmResults = average(await benchmark('npm', fixture.name, {limitRuns: LIMIT_RUNS}))
    const yarnResults = average(await benchmark('yarn', fixture.name, {limitRuns: LIMIT_RUNS}))
    const pnpmResults = average(await benchmark('pnpm', fixture.name, {limitRuns: LIMIT_RUNS}))
    generateSvg({
      'npm': npmResults,
      'yarn': yarnResults,
      'pnpm': pnpmResults
    }, fixture.name)
    sections.push(stripIndents`
      ${fixture.mdDesc}

      | action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
      | ---     | ---   | ---      | ---         | --- | --- | --- |
      | install |       |          |             | ${npmResults.firstInstall} | ${yarnResults.firstInstall} | ${pnpmResults.firstInstall} |
      | install | ✔    | ✔        | ✔           | ${npmResults.repeatInstall} | ${yarnResults.repeatInstall} | ${pnpmResults.repeatInstall} |
      | install | ✔    | ✔        |             | ${npmResults.withWarmCacheAndLockfile} | ${yarnResults.withWarmCacheAndLockfile} | ${pnpmResults.withWarmCacheAndLockfile} |
      | install | ✔    |          |             | ${npmResults.withWarmCache} | ${yarnResults.withWarmCache} | ${pnpmResults.withWarmCache} |
      | install |      | ✔        |             | ${npmResults.withLockfile} | ${yarnResults.withLockfile} | ${pnpmResults.withLockfile} |

      ![Graph of the ${fixture.name} results](./results/imgs/${fixture.name}.svg)
    `)
  }

  fs.writeFile('README.md', stripIndents`
    # Node package manager benchmark

    This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

    ${sections.join('\n\n')}`, 'utf8')
}

function average (benchmarkResults) {
  const results = {}
  ;['firstInstall', 'repeatInstall', 'withWarmCacheAndLockfile', 'withWarmCache', 'withLockfile']
    .forEach(measurmentName => {
      const avgMs = benchmarkResults.map(res => res[measurmentName]).reduce(sum, 0) / benchmarkResults.length
      results[measurmentName] = prettyMs(avgMs)
      results[measurmentName + 'Ms'] = avgMs
    })
  return results
}

function sum (a, b) {
  return a + b
}
