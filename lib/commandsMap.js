'use strict'

module.exports = {
  npm: {
    name: 'npm',
    args: ['install', '--force', '--ignore-scripts']
  },
  pnpm: {
    name: 'pnpm',
    args: ['install', '--ignore-scripts', '--store-path', `./.store`, '--local-registry', './.registry']
  },
  yarn: {
    name: 'yarn',
    args: ['--force', '--ignore-scripts']
  }
}
