'use strict'

module.exports = {
  npm: {
    name: 'npm',
    args: ['install', '--force', '--ignore-scripts', '--cache', './.npm-cache']
  },
  pnpm: {
    name: 'pnpm',
    args: ['install', '--ignore-scripts', '--store', `./.store`]
  },
  yarn: {
    name: 'yarn',
    args: ['--force', '--ignore-scripts', '--cache-folder', './.yarn-cache']
  }
}
