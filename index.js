'use strict'
const path = require('path')
const child = require('child_process')
const mkdirp = require('mkdirp').sync
const rimraf = require('rimraf').sync
const fs = require('fs')
const pathKey = require('path-key')
const thenify = require('thenify')
const getFolderSize = thenify(require('get-folder-size'))
const copy = thenify(require('fs-extra').copy)
const stripIndents = require('common-tags').stripIndents
const prettyBytes = require('pretty-bytes')
const prettyMs = require('pretty-ms')

const PATH = pathKey()

const env = createEnv()

function createEnv () {
  const env = Object.create(process.env)
  env[PATH] = [
    path.join(__dirname, 'node_modules/.bin'),
    path.dirname(process.execPath),
    process.env[PATH]
  ].join(path.delimiter)
  return env
}

function benchmark (fixture, cmd, args) {
  const cwd = path.join(__dirname, '.tmp', cmd, fixture)
  return copy(path.join(__dirname, 'fixtures', fixture), cwd)
    .then(() => {
      child.spawnSync(cmd, ['cache', 'clean'], {env, stdio: 'inherit'})
      const startTime = Date.now()
      const result = child.spawnSync(cmd, args, {env, cwd, stdio: 'inherit'})
      if (result.status !== 0) {
        throw new Error(`${timeName} failed with status code ${result.status}`)
      }
      const endTime = Date.now()
      return getFolderSize(path.join(cwd, 'node_modules'))
        .then(size => {
          rimraf(cwd)
          return {
            time: endTime - startTime,
            size,
          }
        })
    })
}

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
  },
]

Promise.all(fixtures.map(fixture => {
  return Promise.all([
    benchmark(fixture.name, 'npm', ['install', '--force', '--ignore-scripts']),
    benchmark(fixture.name, 'yarn', ['--force', '--ignore-scripts']),
    benchmark(fixture.name, 'pnpm', ['install', '--ignore-scripts', '--store-path', `../${fixture.name}+store`]),
  ])
  .then(results => {
    const [npmResults, yarnResults, pnpmResults] = results
    return stripIndents`
      ${fixture.mdDesc}

      | command | time in ms | size in bytes |
      | --- | --- | --- |
      | npm install | ${prettyMs(npmResults.time)} | ${prettyBytes(npmResults.size)} |
      | yarn | ${prettyMs(yarnResults.time)} | ${prettyBytes(yarnResults.size)} |
      | pnpm install | ${prettyMs(pnpmResults.time)} | ${prettyBytes(pnpmResults.size)} |`
  })
}))
.then(sections => {
  fs.writeFile('README.md', stripIndents`
    # Node package manager benchmark

    This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

    ${sections.join('\n\n')}`, 'utf8')
})
