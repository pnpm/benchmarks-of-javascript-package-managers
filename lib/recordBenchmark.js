'use strict'
const benchmark = require('./benchmarkFixture')
const path = require('path')
const writeYamlFile = require('write-yaml-file')
const loadYamlFile = require('load-yaml-file')

const BASEDIR = path.join(__dirname, '..')
const RESULTS = path.join(BASEDIR, 'results')

module.exports = async function (pm, fixture) {
  const pmVersion = require(`${pm}/package.json`).version
  const resultsFile = path.join(RESULTS, pm, pmVersion, `${fixture}.yaml`)
  const prevResults = await safeLoadYamlFile(resultsFile) || []
  const newResults = await benchmark(pm, fixture)
  const results = [...prevResults, newResults]
  await writeYamlFile(resultsFile, results)
  return results
}

async function safeLoadYamlFile (filename) {
  try {
    return await loadYamlFile(filename)
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
    return null
  }
}
