'use strict'
const path = require('path')
const child = require('child_process')
const mkdirp = require('mkdirp').sync
const rimraf = require('rimraf').sync
const fs = require('fs')
const pathKey = require('path-key')

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

function benchmark (cmd, args) {
  const timeName = `${cmd} ${args.join(' ')}`
  const cwd = path.join(__dirname, '.tmp', cmd)
  mkdirp(cwd)
  const startTime = Date.now()
  fs.writeFileSync(path.join(cwd, 'package.json'), '{"name":"foo","version":"1.0.0"}', 'utf-8')
  const result = child.spawnSync(cmd, args, {env, cwd, stdio: 'inherit'})
  if (result.status !== 0) {
    throw new Error(`${timeName} failed with status code ${result.status}`)
  }
  const endTime = Date.now()
  rimraf(cwd)
  return endTime - startTime
}

const npmTime = benchmark('npm', ['install', 'babel-cli', '-S', '--force', '--ignore-scripts'])

const yarnTime = benchmark('yarn', ['add', 'babel-cli', '--force', '--ignore-scripts'])

const pnpmTime = benchmark('pnpm', ['install', 'babel-cli', '-S', '--ignore-scripts', '--store-path', '"node_modules/.store"'])

fs.writeFile('README.md', `
# Node package manager benchmark

This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/rstacruz/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

| command | time in ms |
| --- | --- |
| npm install babel-cli | ${npmTime} |
| yarn add babel-cli | ${yarnTime} |
| pnpm install babel-cli | ${pnpmTime} |
`, 'utf8')
