'use strict'
const { promisify } = require('util')
const writeFile = promisify(require('fs').writeFile)
const { join } = require('path')
const mkdirp = require('mkdirp')
const stripIndents = require('common-tags').stripIndents
const prettyMs = require('pretty-ms')
const benchmark = require('./lib/recordBenchmark')
const generateSvg = require('./lib/generateSvg')

const LIMIT_RUNS = 3

const fixtures = [
  {
    name: 'react-app',
    mdDesc: '## React App\n\nThe app\'s `package.json` [here](./fixtures/react-app/package.json)'
  },
  {
    name: 'ember-quickstart',
    mdDesc: '## Ember App\n\nThe app\'s `package.json` [here](./fixtures/ember-quickstart/package.json)'
  },
  {
    name: 'angular-quickstart',
    mdDesc: '## Angular App\n\nThe app\'s `package.json` [here](./fixtures/angular-quickstart/package.json)'
  },
  {
    name: 'medium-size-app',
    mdDesc: '## Medium Size App\n\nThe app\'s `package.json` [here](./fixtures/medium-size-app/package.json)'
  },
  {
    name: 'alotta-files',
    mdDesc: '## Lots of Files\n\nThe app\'s `package.json` [here](./fixtures/alotta-files/package.json)'
  }
]

const tests = [
  'firstInstall',
  'repeatInstall',
  'withWarmCacheAndLockfile',
  'withWarmCache',
  'withLockfile',
  'withWarmCacheAndModules',
  'withWarmModulesAndLockfile',
  'withWarmModules',
  'updatedDependencies'
]

const testDescriptions = [
  [ // firstInstall
    'clean install'
  ],
  [ // repeatInstall
    'with cache',
    'with lockfile',
    'with node_modules'
  ],
  [ // withWarmCacheAndLockfile
    'with cache',
    'with lockfile'
  ],
  [ // withWarmCache
    'with cache'
  ],
  [ // withLockfile
    'with lockfile'
  ],
  [ // withWarmCacheAndModules
    'with cache',
    'with node_modules'
  ],
  [ // withWarmModulesAndLockfile
    'with node_modules',
    'with lockfile'
  ],
  [ // withWarmModules
    'with node_modules'
  ],
  [ // updatedDependencies
    'updated',
    'dependencies'
  ]
]

const toArray = (pms, resultsObj) => {
  /**
   * Make array of all similar installs grouped together:
   * [
   *   [ npm.firstInstall, yarn.firstInstall, pnpm.firstInstall ],
   *   [ npm.repeatInstall, yarn.repeatInstall, pnpm.repeatInstall ],
   *   ...
   * ]
   */
  return tests
    .map((test) => pms
      .map((pm) => resultsObj[pm][test])
      .map((time) => Math.round(time / 100) / 10) // round to `x.x` seconds
    )
}

run()
  .then(() => console.log('done'))
  .catch(err => console.error(err))

async function run () {
  const pms = [ 'npm', 'yarn', 'pnpm' ]
  const sections = []
  const svgs = []
  for (const fixture of fixtures) {
    const npmRes = average(await benchmark('npm', fixture.name, {limitRuns: LIMIT_RUNS}))
    const yarnRes = average(await benchmark('yarn', fixture.name, {limitRuns: LIMIT_RUNS}))
    const pnpmRes = average(await benchmark('pnpm', fixture.name, {limitRuns: LIMIT_RUNS}))
    const resArray = toArray(pms, {
      'npm': npmRes,
      'yarn': yarnRes,
      'pnpm': pnpmRes
    })

    sections.push(stripIndents`
      ${fixture.mdDesc}

      | action  | cache | lockfile | node_modules| npm | Yarn | pnpm |
      | ---     | ---   | ---      | ---         | --- | --- | --- |
      | install |       |          |             | ${prettyMs(npmRes.firstInstall)} | ${prettyMs(yarnRes.firstInstall)} | ${prettyMs(pnpmRes.firstInstall)} |
      | install | ✔     | ✔        | ✔           | ${prettyMs(npmRes.repeatInstall)} | ${prettyMs(yarnRes.repeatInstall)} | ${prettyMs(pnpmRes.repeatInstall)} |
      | install | ✔     | ✔        |             | ${prettyMs(npmRes.withWarmCacheAndLockfile)} | ${prettyMs(yarnRes.withWarmCacheAndLockfile)} | ${prettyMs(pnpmRes.withWarmCacheAndLockfile)} |
      | install | ✔     |          |             | ${prettyMs(npmRes.withWarmCache)} | ${prettyMs(yarnRes.withWarmCache)} | ${prettyMs(pnpmRes.withWarmCache)} |
      | install |       | ✔        |             | ${prettyMs(npmRes.withLockfile)} | ${prettyMs(yarnRes.withLockfile)} | ${prettyMs(pnpmRes.withLockfile)} |
      | install | ✔     |          | ✔           | ${prettyMs(npmRes.withWarmCacheAndModules)} | ${prettyMs(yarnRes.withWarmCacheAndModules)} | ${prettyMs(pnpmRes.withWarmCacheAndModules)} |
      | install |       | ✔        | ✔           | ${prettyMs(npmRes.withWarmModulesAndLockfile)} | ${prettyMs(yarnRes.withWarmModulesAndLockfile)} | ${prettyMs(pnpmRes.withWarmModulesAndLockfile)} |
      | install |       |          | ✔           | ${prettyMs(npmRes.withWarmModules)} | ${prettyMs(yarnRes.withWarmModules)} | ${prettyMs(pnpmRes.withWarmModules)} |
      | update  | n/a   | n/a      | n/a         | ${prettyMs(npmRes.updatedDependencies)} | ${prettyMs(yarnRes.updatedDependencies)} | ${prettyMs(pnpmRes.updatedDependencies)} |

      ![Graph of the ${fixture.name} results](./results/imgs/${fixture.name}.svg)
    `)

    svgs.push({
      path: join(__dirname, 'results', 'imgs', `${fixture.name}.svg`),
      file: generateSvg(resArray, pms, testDescriptions)
    })
  }

  // make sure folder exists
  mkdirp.sync(join(__dirname, 'results', 'imgs'))

  const introduction = stripIndents`
  # Benchmarks of JavaScript Package Managers

  This benchmark compares the performance of [npm](https://github.com/npm/cli), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).
  `

  const explanation = stripIndents`
  Here's a quick explanation of how these tests could apply to the real world:

  - \`clean install\`: How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no \`node_modules\` folder.
  - \`with cache\`, \`with lockfile\`, \`with node_modules\`: After the first install is done, the install command is run again.
  - \`with cache\`, \`with lockfile\`: When a repo is fetched by a developer and installation is first run.
  - \`with cache\`: Same as the one above, but the package manager doesn't have a lockfile to work from.
  - \`with lockfile\`: When an installation runs on a CI server.
  - \`with cache\`, \`with node_modules\`: The lockfile is deleted and the install command is run again.
  - \`with node_modules\`, \`with lockfile\`: The package cache is deleted and the install command is run again.
  - \`with node_modules\`: The package cache and the lockfile is deleted and the install command is run again.
  - \`updated dependencies\`: Updating your dependencies by changing the version in the \`package.json\` and running the install command again.
`

  await Promise.all(
    [
      Promise.all(svgs.map((file) => writeFile(file.path, file.file, 'utf-8'))),
      writeFile('README.md', stripIndents`
        ${introduction}

        ${explanation}

        ${sections.join('\n\n')}`, 'utf8')
    ]
  ).catch((err) => { throw err })
}

function average (benchmarkResults) {
  const results = {}
  tests.forEach(test => {
    results[test] = benchmarkResults.map(res => res[test]).reduce(sum, 0) / benchmarkResults.length
  })
  return results
}

function sum (a, b) {
  return a + b
}
