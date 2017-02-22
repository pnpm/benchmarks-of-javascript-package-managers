'use strict'
const path = require('path')
const fs = require('fs')
const stripIndents = require('common-tags').stripIndents
const prettyBytes = require('pretty-bytes')
const prettyMs = require('pretty-ms')
const benchmark = require('./lib/benchmarkFixture')
const commandsMap = require('./lib/commandsMap')

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

run()
  .then(() => console.log('done'))
  .catch(err => console.error(err))

async function run () {
  const sections = await Promise.all(
    fixtures.map(async fixture => {
      const results = await Promise.all([
        benchmark('npm', fixture.name),
        benchmark('yarn', fixture.name),
        benchmark('pnpm', fixture.name),
      ])
      const [npmResults, yarnResults, pnpmResults] = results
      return stripIndents`
        ${fixture.mdDesc}

        | command | time in ms | size in bytes |
        | --- | --- | --- |
        | npm install | ${prettyMs(npmResults.time)} | ${prettyBytes(npmResults.size)} |
        | yarn | ${prettyMs(yarnResults.time)} | ${prettyBytes(yarnResults.size)} |
        | pnpm install | ${prettyMs(pnpmResults.time)} | ${prettyBytes(pnpmResults.size)} |`
    })
  )

  fs.writeFile('README.md', stripIndents`
    # Node package manager benchmark

    This benchmark compares the performance of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm) and [yarn](https://github.com/yarnpkg/yarn).

    ${sections.join('\n\n')}`, 'utf8')
}
