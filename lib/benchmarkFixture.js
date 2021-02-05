'use strict'
const path = require('path')
const child = require('child_process')
const pathKey = require('path-key')
const thenify = require('thenify')
const spawn = require("cross-spawn");
const copy = thenify(require('fs-extra').copy)
const readFile = thenify(require('fs').readFile)
const writeFile = thenify(require('fs').writeFile)
const getFolderSize = thenify(require('get-folder-size'))
const rimraf = require('rimraf').sync

const BASEDIR = path.join(__dirname, '..')
const FIXTURES_DIR = path.join(BASEDIR, 'fixtures')
const TMP = path.join(BASEDIR, '.tmp')

const lockfileNameByPM = {
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

module.exports = async function benchmark (pm, fixture, opts) {
  const cwd = path.join(TMP, pm.scenario, fixture)
  await copy(path.join(FIXTURES_DIR, fixture), cwd)
  const modules = opts.hasNodeModules ? path.join(cwd, 'node_modules') : null

  console.log(`# first install`)

  const firstInstall = measureInstall(pm, cwd)

  let repeatInstall
  if (modules) {
    console.log(`# repeat install`)

    repeatInstall = measureInstall(pm, cwd)

    rimraf(modules)
  } else {
    repeatInstall = 0
  }

  console.log(`# with warm cache and lockfile`)

  const withWarmCacheAndLockfile = measureInstall(pm, cwd)

  if (modules) {
    rimraf(modules)
  }

  const lockfileName = lockfileNameByPM[pm.name]
  rimraf(path.join(cwd, lockfileName))

  console.log('# with warm cache')

  const withWarmCache = measureInstall(pm, cwd)

  if (modules) {
    rimraf(modules)
  }
  rimraf(path.join(cwd, 'cache'))

  console.log('# with lockfile')

  const withLockfile = measureInstall(pm, cwd)

  rimraf(path.join(cwd, lockfileName))

  let withWarmCacheAndModules
  let withWarmModulesAndLockfile
  let withWarmModules
  let size
  if (modules) {
    console.log('# with warm cache and modules')

    withWarmCacheAndModules = measureInstall(pm, cwd)

    rimraf(path.join(cwd, 'cache'))

    console.log('# with warm modules and lockfile')

    withWarmModulesAndLockfile = measureInstall(pm, cwd)

    rimraf(path.join(cwd, 'cache'))
    rimraf(path.join(cwd, lockfileName))

    console.log('# with warm modules')

    withWarmModules = measureInstall(pm, cwd)

    size = await getFolderSize(modules)
  } else {
    withWarmCacheAndModules =
      withWarmModulesAndLockfile =
      withWarmModules = 0
    size = await getFolderSize(path.join(cwd, 'cache'))
  }

  console.log('# with updated dependencies')

  // update all dependency versions to '*' and install again
  const originalPackageJson = await updateDependenciesInPackageJson(cwd)
  const updatedDependencies = measureInstall(pm, cwd)

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
  const result = spawn.sync(cmd.name, cmd.args, { env, cwd, stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error(`${cmd.name} failed with status code ${result.status}`)
  }

  const endTime = Date.now()

  return endTime - startTime
}
