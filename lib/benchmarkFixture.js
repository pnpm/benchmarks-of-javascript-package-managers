'use strict'
const path = require('path')
const child = require('child_process')
const pathKey = require('path-key')
const cmdsMap = require('./commandsMap')
const thenify = require('thenify')
const copy = thenify(require('fs-extra').copy)
const getFolderSize = thenify(require('get-folder-size'))
const rimraf = require('rimraf').sync

const BASEDIR = path.join(__dirname, '..')
const FIXTURES_DIR = path.join(BASEDIR, 'fixtures')
const TMP = path.join(BASEDIR, '.tmp')

const env = createEnv()

function createEnv () {
  const pathEnv = pathKey()  
  const env = Object.create(process.env)
  env[pathEnv] = [
    path.join(BASEDIR, 'node_modules', '.bin'),
    path.dirname(process.execPath),
    process.env[pathEnv]
  ].join(path.delimiter)
  return env
}

module.exports = async function benchmark (pm, fixture) {
  const cmd = cmdsMap[pm]

  const cwd = path.join(TMP, pm, fixture)
  await copy(path.join(FIXTURES_DIR, fixture), cwd)

  child.spawnSync(cmd.name, ['cache', 'clean'], {env, stdio: 'inherit'})

  const startTime = Date.now()

  const result = child.spawnSync(cmd.name, cmd.args, {env, cwd, stdio: 'inherit'})
  if (result.status !== 0) {
    throw new Error(`${timeName} failed with status code ${result.status}`)
  }

  const endTime = Date.now()

  const modules = path.join(cwd, 'node_modules')
  const size = await getFolderSize(modules)
  rimraf(cwd)
  return {
    time: endTime - startTime,
    size,
  }
}
