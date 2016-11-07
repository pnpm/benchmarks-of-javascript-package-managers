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

const PATH = pathKey()

const env = createEnv()

console.log('prepare')

child.spawnSync('npm', ['cache', 'clean'], {env, stdio: 'inherit'})
child.spawnSync('yarn', ['cache', 'clean'], {env, stdio: 'inherit'})
child.spawnSync('pnpm', ['cache', 'clean'], {env, stdio: 'inherit'})

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

Promise.all([
  benchmark('react-app', 'npm', ['install', '--force', '--ignore-scripts']),
  benchmark('react-app', 'yarn', ['--force', '--ignore-scripts']),
  benchmark('react-app', 'pnpm', ['install', '--ignore-scripts', '--store-path', 'node_modules/.store']),
])
.then(results => {
  const [npmResults, yarnResults, pnpmResults] = results
  fs.writeFile('README.md', `
# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

## React app

The app's \`package.json\` [here](./fixtures/react-app/package.json)

| command | time in ms | size in bytes |
| --- | --- | --- |
| npm install | ${npmResults.time} | ${npmResults.size} |
| yarn | ${yarnResults.time} | ${yarnResults.size} |
| pnpm install | ${pnpmResults.time} | ${pnpmResults.size} |
`, 'utf8')
})
