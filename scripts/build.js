const fs = require('fs')
const Log = require('log')
const browserify = require('browserify')
const errorify = require('errorify')
const cssNext = require('postcss-cssnext')
const cssModulesify = require('css-modulesify')
const exec = require('child_process').exec
const ABCQ = require('abcq')

function ScopedName () {
  const shortid = new ABCQ({
    chars: ['👻', '🦄', '🍀', '👾']
  })
  this.names = {}
  return (name, file) => {
    const obj = this.names[file] || {}
    if (!(name in obj)) {
      obj[name] = shortid.generate()
    }
    this.names[file] = obj
    return obj[name]
  }
}

const generateScopedName = new ScopedName()

const log = new Log('info')
const fileMap = {
  'index.js': 'main'
}

const files = Object.keys(fileMap)
const srcFolder = `${__dirname}/../demo`
const buildFolder = `${__dirname}/../docs`

const outFiles = files.map(file => {
  return `${buildFolder}/${fileMap[file]}.js`
}).join(' ')

exec(`rm -rf ${outFiles} ${buildFolder}/index.html`, (err) => {
  if (err) {
    throw err
  }

  exec(`cp ${srcFolder}/index.html ${buildFolder}/index.html; cp ${srcFolder}/favico.png ${buildFolder}/favico.png`, (error) => {
    if (error) {
      throw error
    }
  })

  files.forEach(file => {
    const inFile = `${srcFolder}/${file}`
    const outFile = `${buildFolder}/${fileMap[file]}`
    const b = browserify({
      entries: [inFile],
      plugin: [
        errorify
      ]
    })

    b.plugin(cssModulesify, {
      output: `${outFile}.css`,
      after: [cssNext()],
      generateScopedName,
      global: true
    })

    function bundle () {
      b.bundle().pipe(fs.createWriteStream(`${outFile}.js`))
    }

    b.on('log', message => log.info(message))
    b.on('error', message => log.error(message))
    bundle()
  })
})
