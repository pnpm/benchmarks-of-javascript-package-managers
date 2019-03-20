'use strict'
const path = require('path')
const child = require('child_process')
const pathKey = require('path-key')
const cmdsMap = require('./commandsMap')
const thenify = require('thenify')
const copy = thenify(require('fs-extra').copy)
const readFile = thenify(require('fs').readFile)
const writeFile = thenify(require('fs').writeFile)
const getFolderSize = thenify(require('get-folder-size'))
const rimraf = require('rimraf').sync

const BASEDIR = path.join(__dirname, '..')
const FIXTURES_DIR = path.join(BASEDIR, 'fixtures')
const TMP = path.join(BASEDIR, '.tmp')

const lockfileName = {
  npm: 'package-lock.json',
  pnpm: 'pnpm-lock.yaml',
  yarn: 'yarn.lock'
}

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

async function updateDependenciesInPackageJson (cwd) {
  const packageJsonPath = path.join(cwd, 'package.json')
  const buf = await readFile(packageJsonPath)
  const originalAsString = buf.toString()
  const parsed = JSON.parse(originalAsString)

  // set all dependency versions to '*'
  Object.keys(parsed).forEach((key) => {
    if (key.toLowerCase().includes('dependencies')) {
      Object.keys(parsed[key]).forEach((dependency) => {
        parsed[key][dependency] = '*'
      })
    }
  })

  const modifiedAsString = JSON.stringify(parsed)
  await writeFile(packageJsonPath, modifiedAsString)

  // return the original file so that we can replace it when done
  return originalAsString
}

module.exports = async function benchmark (pm, fixture) {
  const cmd = cmdsMap[pm]

  const cwd = path.join(TMP, pm, fixture)
  await copy(path.join(FIXTURES_DIR, fixture), cwd)
  const modules = path.join(cwd, 'node_modules')

  console.log(`# first install`)

  const firstInstall = measureInstall(cmd, cwd)

  console.log(`# repeat install`)

  const repeatInstall = measureInstall(cmd, cwd)

  rimraf(modules)

  console.log(`# with warm cache and lockfile`)

  const withWarmCacheAndLockfile = measureInstall(cmd, cwd)

  rimraf(modules)
  rimraf(path.join(cwd, lockfileName[pm]))

  console.log('# with warm cache')

  const withWarmCache = measureInstall(cmd, cwd)

  rimraf(modules)
  rimraf(path.join(cwd, 'cache'))

  console.log('# with lockfile')

  const withLockfile = measureInstall(cmd, cwd)

  rimraf(path.join(cwd, lockfileName[pm]))

  console.log('# with warm cache and modules')

  const withWarmCacheAndModules = measureInstall(cmd, cwd)

  rimraf(path.join(cwd, 'cache'))

  console.log('# with warm modules and lockfile')

  const withWarmModulesAndLockfile = measureInstall(cmd, cwd)

  rimraf(path.join(cwd, 'cache'))
  rimraf(path.join(cwd, lockfileName[pm]))

  console.log('# with warm modules')

  const withWarmModules = measureInstall(cmd, cwd)

  const size = await getFolderSize(modules)

  console.log('# with updated dependencies')

  // update all dependency versions to '*' and install again
  const originalPackageJson = await updateDependenciesInPackageJson(cwd)
  const updatedDependencies = measureInstall(cmd, cwd)

  // revert `package.json` back to its original state, just in case
  await writeFile(path.join(cwd, 'package.json'), originalPackageJson)

  rimraf(cwd)
  return {
    firstInstall,
    repeatInstall,
    withWarmCacheAndLockfile,
    withWarmCache,
    withLockfile,
    withWarmCacheAndModules,
    withWarmModulesAndLockfile,
    withWarmModules,
    updatedDependencies,
    size
  }
}

function measureInstall (cmd, cwd) {
  const startTime = Date.now()

  console.log(`> ${cmd.name} ${cmd.args.join(' ')}`)
  const result = child.spawnSync(cmd.name, cmd.args, {env, cwd, stdio: 'inherit'})
  if (result.status !== 0) {
    throw new Error(`${cmd.name} failed with status code ${result.status}`)
  }

  const endTime = Date.now()

  return endTime - startTime
}
