'use strict'

module.exports = {
  npm: {
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
    name: 'yarn',
    args: [
      '--ignore-scripts',
      '--cache-folder',
      'cache'
    ]
  },
  yarn_pnp: {
    name: 'yarn',
    args: [
      '--pnp',
      '--ignore-scripts',
      '--cache-folder',
      'cache'
    ]
  }
}
