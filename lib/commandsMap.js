'use strict'

module.exports = {
  npm: {
    name: 'npm',
    args: ['install', '--force', '--ignore-scripts', '--cache', './.npm-cache', '--registry', 'https://registry.npmjs.org/']
  },
  pnpm: {
    name: 'pnpm',
    args: ['install', '--ignore-scripts', '--store', `./.store`, '--registry', 'https://registry.npmjs.org/']
  },
  yarn: {
    name: 'yarn',
    args: ['--force', '--ignore-scripts', '--cache-folder', './.yarn-cache']
  }
}
