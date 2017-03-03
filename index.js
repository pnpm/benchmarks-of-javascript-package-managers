'use strict'
const fs = require('fs')
const loadYamlFile = require('load-yaml-file')
const writeYamlFile = require('write-yaml-file')
const benchmark = require('./lib/benchmarkFixture')

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

const pms = ['npm', 'yarn', 'pnpm']

run()
  .then(() => console.log('done'))
  .catch(err => console.error(err))

async function run () {
  const stats = await loadYamlFile('stats.yaml') || []
  const newStats = stats.concat(
    await Promise.all(
      fixtures.reduce((acc, fixture) => 
        acc.concat(pms.map(pm => runBenchmark(pm, fixture.name)))
      , [])
    )
  )
  await writeYamlFile('stats.yaml', newStats)
}

async function runBenchmark(pm, fixture) {
  const pmVersion = require(`${pm}/package.json`).version
  return Object.assign({
    tool: {
      name: pm,
      version: pmVersion
    },
    date: date(),
    fixture
  }, await benchmark(pm, fixture))
}

function date() {
  var now = new Date()
  return `${now.getUTCFullYear()}-${now.getUTCMonth() + 1}-${now.getUTCDate()}`
}
