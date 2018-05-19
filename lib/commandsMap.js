'use strict'

module.exports = {
  npm: {
    name: 'npm',
    args: ['install', '--ignore-scripts', '--cache', 'cache', '--registry', 'https://registry.npmjs.org/']
  },
  pnpm: {
    name: 'pnpm',
    args: ['install', '--ignore-scripts', '--store', `cache`, '--registry', 'https://registry.npmjs.org/', '--no-lock']
  },
  pnpm1: {
    name: 'pnpm1',
    args: ['install', '--ignore-scripts', '--store', `cache`, '--registry', 'https://registry.npmjs.org/', '--no-lock']
  },
  yarn: {
    name: 'yarn',
    args: ['--ignore-scripts', '--cache-folder', 'cache']
  }
}
