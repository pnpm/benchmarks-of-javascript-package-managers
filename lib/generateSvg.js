'use strict'

const getHighestNumber = (array) => {
  // flatten array of arrays of numbers into an array of numbers
  const flattened = [].concat.apply([], array)
  // return the highest number
  return Math.max.apply(null, flattened)
}

const NPM_COLOR = '#cd3731'
const YARN_COLOR = '#248ebd'
const PNPM_COLOR = '#fbae00'

module.exports = (resultArrays, pms, tests) => {
  let svgStr = ''
  // colors taken from logos (where possible)
  const colors = [ NPM_COLOR, PNPM_COLOR, YARN_COLOR, YARN_COLOR ]
  // empty areas next to the graph
  const offset = {
    left: 40,
    right: 10,
    top: 35,
    bottom: 10
  }
  // thickness of bars
  const thickness = 6
  // spacing between bars
  const spacing = 0.5
  // spacing between groups of bars
  const separation = 4
  // rectangle in which the graph will be drawn
  const graph = {
    x: offset.left,
    y: offset.top,
    w: 250,
    h: tests.length * pms.length * (thickness + spacing) +
      (tests.length - 1) * separation +
      separation * 2 // extra white space above first bar and below last bar
  }
  // viewbox dimensions
  const vb = {
    x: 0,
    y: 0,
    w: graph.w +
      offset.left +
      offset.right,
    h: graph.h + offset.top + offset.bottom
  }
  // get the highest number of the results so
  // that the graph can be scaled accordingly
  const max = getHighestNumber(resultArrays)
  // upper limit of graph is the highest result rounded
  // up to the nearest number divisible by 5
  const limit = Math.ceil(max / 5) * 5
  const ratio = graph.w / limit
  const styles = {
    font: '.font { font-family: sans-serif; }',
    s3: '.s3 { font-size: 3px; }',
    s4: '.s4 { font-size: 4px; }',
    s5: '.s5 { font-size: 5px; }',
    line: '.line { stroke: #cacaca; }',
    width: '.width { stroke-width: 0.5; }',
    text: '.text { fill: #888; }'
  }

  svgStr += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" '
  svgStr += `viewBox="${vb.x} ${vb.y} ${vb.w} ${vb.h}">` + '\n'

  // add styles
  svgStr += '  <style>' + '\n'
  Object.values(styles).forEach((style) => {
    svgStr += `    ${style}` + '\n'
  })
  svgStr += '  </style>' + '\n'

  // add white background
  svgStr += `  <rect x="${vb.x}" y="${vb.y}" width="${vb.w}" height="${vb.h}" fill="${'#fff'}"></rect>` + '\n'

  // uncomment to color the entire view box for debugging
  // svgStr += `<rect x="${vb.x}" y="${vb.y}" width="${vb.w}" height="${vb.h}" fill="${'#eaeaea'}"></rect>` + '\n'

  // draw legend
  pms.forEach((pm, index) => {
    // draw colored circle
    const radius = 4
    const x = graph.x + radius + (radius * 4) * index
    const y = vb.y + radius + 2
    svgStr += `  <circle cx="${x}" cy="${y}" r="${radius}" fill="${colors[index]}"></circle>` + '\n'

    // add name under circle
    const anchor = 'middle'
    let textY = y + radius + 4
    svgStr += `  <text x="${x}" y="${textY}" class="font s4" text-anchor="${anchor}">${pm.legend}</text>` + '\n'

    // add version under name
    const pmVersion = require(`${pm.name}/package.json`).version
    const text = `v${pmVersion}`
    textY += 4
    svgStr += `  <text x="${x}" y="${textY}" class="font s3" text-anchor="${anchor}">${text}</text>` + '\n'
  })

  const graphLines = [
    graph.x + limit * ratio * 0,
    graph.x + limit * ratio * 0.2,
    graph.x + limit * ratio * 0.4,
    graph.x + limit * ratio * 0.6,
    graph.x + limit * ratio * 0.8,
    graph.x + limit * ratio * 1
  ]
  let baseGraphLine = ''

  // draw graph lines
  graphLines.forEach((graphLine, index) => {
    const isBaseLine = index === 0
    const compositeClass = isBaseLine
      ? 'line'
      : 'line width'
    const y1 = graph.y - separation
    const y2 = y1 + graph.h
    const line = `  <line x1="${graphLine}" y1="${y1}" x2="${graphLine}" y2="${y2}" class="${compositeClass}"></line>` + '\n'
    // add base graph line after the bars are drawn so that it is drawn over the bars
    if (isBaseLine) {
      baseGraphLine = line
    } else {
      svgStr += line
    }

    // add numbers above the graph lines
    const anchor = 'middle'
    const x = graphLine
    let y = graph.y - 7
    const number = limit * (index / (graphLines.length - 1))
    svgStr += `  <text x="${x}" y="${y}" class="font s5 text" text-anchor="${anchor}">${number}</text>` + '\n'

    // add numbers below the graph lines
    y = y2 + 5
    svgStr += `  <text x="${x}" y="${y}" class="font s5 text" text-anchor="${anchor}">${number}</text>` + '\n'
  })

  // add axis explanation
  ;(() => {
    const text = 'Installation time in seconds (lower is better)'
    const anchor = 'end'
    const fontStyle = 'italic'
    const x = graph.x + graph.w
    const y = graph.y - 15
    svgStr += `  <text x="${x}" y="${y}" class="font s4 text" font-style="${fontStyle}" text-anchor="${anchor}">${text}</text>` + '\n'
  })()

  // draw results as bars
  resultArrays.forEach((results, indexA) => {
    results.forEach((result, indexR) => {
      const roundedCorners = 1
      const y = graph.y +
        ((thickness + spacing) * indexR) +
        (((thickness + spacing) * pms.length + separation) * indexA)
      const length = Math.round(result * ratio)
      const x = graph.x
      svgStr += `  <rect x="${x}" y="${y}" width="${length}" height="${thickness}" fill="${colors[indexR]}" rx="${roundedCorners}" ry="${roundedCorners}"></rect>` + '\n'
    })
  })

  // draw base graph line over the bars
  svgStr += baseGraphLine

  // next to each bar group specify the properties of the test
  tests.forEach((properties, indexT) => {
    properties.forEach((property, indexP) => {
      const baseline = 'middle'
      const anchor = 'end'
      const ySpacing = 4
      const x = graph.x - 2
      const y = graph.y +
        // get starting y position of bar group
        ((thickness + spacing) * pms.length + separation) * indexT +
        // go to center of middle bar
        thickness + spacing + thickness / 2 -
        // get y position for property based on how much properties there are
        ((properties.length - (indexP + 1)) / 2) * ySpacing +
        ySpacing * indexP / 2
      svgStr += `  <text x="${x}" y="${y}" class="font s4" dominant-baseline="${baseline}" text-anchor="${anchor}">${property}</text>` + '\n'
    })
  })

  // add node version
  ;(() => {
    const text = `Tests were run using Node.js ${process.version}`
    const anchor = 'end'
    const x = graph.x + graph.w
    const y = vb.h - 2
    svgStr += `  <text x="${x}" y="${y}" class="font s4 text" text-anchor="${anchor}">${text}</text>` + '\n'
  })()

  svgStr += `</svg>` + '\n'

  return svgStr
}
