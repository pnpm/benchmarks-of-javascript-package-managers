'use strict'
const path = require('path')
const child = require('child_process')
const mkdirp = require('mkdirp').sync
const rimraf = require('rimraf').sync
const fs = require('fs')

let PATH = 'PATH'
// windows calls it's path 'Path' usually, but this is not guaranteed.
if (process.platform === 'win32') {
  PATH = 'Path'
  Object.keys(process.env).forEach(e => {
    if (e.match(/^PATH$/i)) {
      PATH = e
    }
  })
}

const env = createEnv()

console.log('prepare')

child.spawnSync('npm', ['cache', 'clean'], {env, stdio: 'inherit'})
child.spawnSync('yarn', ['cache', 'clean'], {env, stdio: 'inherit'})
child.spawnSync('pnpm', ['cache', 'clean'], {env, stdio: 'inherit'})

console.log('start')

benchmark('npm', ['install', 'babel-cli', '--force', '--ignore-scripts'])

benchmark('yarn', ['add', 'babel-cli', '--force', '--ignore-scripts'])

benchmark('pnpm', ['install', 'babel-cli', '--force', '--ignore-scripts'])

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
  console.time(timeName)
  fs.writeFileSync(path.join(cwd, 'package.json'), '{"name":"foo","version":"1.0.0"}', 'utf-8')
  const result = child.spawnSync(cmd, args, {env, cwd})
  if (result.status !== 0) {
    throw new Error(`${timeName} failed with status code ${result.status}`)
  }
  console.timeEnd(timeName)
  rimraf(cwd)
}
