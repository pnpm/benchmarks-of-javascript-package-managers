'use strict'
const path = require('path')
const { writeFile } = require('fs')

module.exports = function (resultsObj, fixture) {
  const filePath = path.join(__dirname, '..', 'results', 'imgs', `${fixture}.svg`)
  createSvg(resultsObj, filePath)
}

const getHighestNumber = (array) => {
  // flatten array of arrays of numbers into an array of numbers
  const flattened = [].concat.apply([], array)
  // return the highest number
  return Math.max.apply(null, flattened)
}

/**
 * Make array of all similar installs grouped together:
 * [
 *   [ npm.firstInstall, yarn.firstInstall, pnpm.firstInstall ],
 *   [ npm.repeatInstall, yarn.repeatInstall, pnpm.repeatInstall ],
 *   ...
 * ]
 */
const toArray = (pms, resultsObj) => {
  const parseToSeconds = (str) => {
    let num = -1
    if (str.indexOf('ms') > -1) {
      num = parseFloat(str.slice(0, -2)) / 1000
    } else if (str.indexOf('s')) {
      num = parseFloat(str.slice(0, -1))
    }
    return num
  }
  console.log(pms)
  console.log(resultsObj)
  const keys = ['firstInstall', 'repeatInstall', 'withWarmCacheAndLockfile', 'withWarmCache', 'withLockfile']
  const arr = keys
    .map((key) => pms
      .map((pm) => resultsObj[pm][key])
        .map(parseToSeconds)
    )
  return arr
}

const createSvg = (resultsObj, filePath) => {
  let svgStr = ''
  const pms = [ 'npm', 'yarn', 'pnpm' ]
  const colors = [ '#cd3731', '#248ebd', '#4c4c4c' ]
  const strokeWidth = 1
  const offset = 20
  const width = 15
  const spacing = 2
  const separation = 15
  const resultArrays = toArray(pms, resultsObj)
  const tests = [
    [ 'clean install' ],
    [ 'cache', 'lockfile', 'node_modules' ],
    [ 'cache', 'lockfile' ],
    [ 'cache' ],
    [ 'lockfile' ]
  ]
  const graph = {
    x: offset,
    y: offset,
    w: tests.length * resultArrays[0].length * (width + spacing) +
      (tests.length - 1) * separation +
      offset,
    h: 100
  }
  const vb = {
    x: 0,
    y: 0,
    w: offset + graph.w,
    h: 100 + (offset + spacing) * 2
  }
  // get the highest number of the results so
  // that the graph can be scaled accordingly
  const max = getHighestNumber(resultArrays)
  // upper limit of graph is the highest number rounded
  // up to the nearest number divisible by 5
  const limit = Math.ceil(max / 5) * 5
  const ratio = graph.h / limit

  svgStr += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" '
  svgStr += `viewBox="${vb.x} ${vb.y} ${vb.w} ${vb.h}">`

  // draw legend
  pms.forEach((pm, index) => {
    const fontSize = 6
    const fontFamily = 'system-ui'
    const baseline = 'middle'
    const size = 10
    const sameColorBarX = size / 4 + graph.x + ((width + spacing) * 4 + separation) * index
    const y = vb.y + offset / 4
    svgStr += `<rect x="${sameColorBarX}" y="${y}" width="${size}" height="${size}" fill="${colors[index]}"></rect>`

    const nextBarX = graph.x + width + spacing + ((width + spacing) * 4 + separation) * index
    svgStr += `<text x="${nextBarX}" y="${y + size / 2}" font-size="${fontSize}" font-family="${fontFamily}" alignment-baseline="${baseline}">${pm}</text>`
  })

  const lineHeights = [
    graph.y + limit * ratio * 0,
    graph.y + limit * ratio * 0.2,
    graph.y + limit * ratio * 0.4,
    graph.y + limit * ratio * 0.6,
    graph.y + limit * ratio * 0.8,
    graph.y + limit * ratio * 1
  ]

  // draw graph lines
  lineHeights.forEach((lineHeight, index) => {
    const fontSize = 6
    const fontFamily = 'system-ui'
    const baseline = 'middle'
    const anchor = 'end'
    const color = '#cacaca'
    svgStr += `<line x1="${graph.x - offset / 2}" y1="${lineHeight}" x2="${graph.w + offset / 2}" y2="${lineHeight}" stroke-width="${strokeWidth}" stroke="${color}"></line>`

    const x = graph.x - offset / 2 - 1
    const y = lineHeight
    const number = (limit - limit * (index / (lineHeights.length - 1)))
    svgStr += `<text x="${x}" y="${y}" font-size="${fontSize}" font-family="${fontFamily}" alignment-baseline="${baseline}" text-anchor="${anchor}">${number}</text>`
  })

  resultArrays.forEach((results, indexA) => {
    // draw bars
    results.forEach((result, indexR) => {
      const x = graph.x +
        ((width + spacing) * indexR) +
        (((width + spacing) * 3 + separation) * indexA)
      const height = Math.round(result * ratio) || 1
      const y = graph.y + graph.h - height
      svgStr += `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${colors[indexR]}"></rect>`
    })

    // draw titles
    tests[indexA].forEach((property, indexT) => {
      const fontSize = 6
      const fontFamily = 'system-ui'
      const baseline = 'hanging'
      const anchor = 'start'
      const x = graph.x + (((width + spacing) * 3 + separation) * indexA)
      const y = graph.y + graph.h + spacing + fontSize * indexT
      svgStr += `<text x="${x}" y="${y}" font-size="${fontSize}" font-family="${fontFamily}" alignment-baseline="${baseline}" text-anchor="${anchor}">${property}</text>`
    })
  })

  svgStr += `</svg>`
  writeFile(filePath, svgStr, 'utf-8', (err) => {
    if (err) {
      throw err
    }
  })
}
