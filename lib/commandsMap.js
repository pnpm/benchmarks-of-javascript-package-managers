'use strict'

module.exports = {
  npm: {
    name: 'npm',
    args: ['install', '--force', '--ignore-scripts', '--cache', './node_modules/.npm-cache']
  },
  pnpm: {
    name: 'pnpm',
    args: ['install', '--ignore-scripts', '--store', `./node_modules/.store`]
  },
  yarn: {
    name: 'yarn',
    args: ['--force', '--ignore-scripts', '--cache-folder', './node_modules/.yarn-cache']
  }
}
