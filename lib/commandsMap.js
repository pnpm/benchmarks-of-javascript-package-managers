'use strict'

module.exports = {
  npm: {
    scenario: 'npm',
    legend: 'npm',
    name: 'npm',
    args: [
      'install',
      '--ignore-scripts',
      '--cache',
      'cache',
      '--registry',
      'https://registry.npmjs.org/'
    ]
  },
  pnpm: {
    scenario: 'pnpm',
    legend: 'pnpm',
    name: 'pnpm',
    args: [
      'install',
      '--ignore-scripts',
      '--store',
      `cache`,
      '--registry',
      'https://registry.npmjs.org/',
      '--no-lock',
      '--no-independent-leaves'
    ]
  },
  yarn: {
    scenario: 'yarn',
    legend: 'Yarn',
    name: 'yarn',
    args: [
      '--ignore-scripts',
      '--cache-folder',
      'cache'
    ]
  },
  yarn_pnp: {
    scenario: 'yarn_pnp',
    legend: "Yarn 2",
    name: 'yarn',
    setup: [
      'touch yarn.lock',
      'yarn set version berry',
    ],
    env: {
      YARN_CACHE_FOLDER: 'cache/cache',
      YARN_GLOBAL_FOLDER: 'cache/global',
      YARN_ENABLE_SCRIPTS: '0'
    },
    args: [
    ]
  }
}
