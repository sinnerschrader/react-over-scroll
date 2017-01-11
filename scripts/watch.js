const fs = require('fs')
const Log = require('log')
const browserify = require('browserify')
const watchify = require('watchify')
const errorify = require('errorify')
const cssNext = require('postcss-cssnext')
const livereactload = require('livereactload')
const cssModulesify = require('css-modulesify')
const exec = require('child_process').exec

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
        errorify,
        watchify,
        livereactload
      ]
    })

    b.plugin(cssModulesify, {
      output: `${outFile}.css`,
      after: [cssNext()],
      global: true
    })

    function bundle () {
      b.bundle().pipe(fs.createWriteStream(`${outFile}.js`))
    }

    b.on('log', message => log.info(message))
    b.on('error', message => log.error(message))
    b.on('update', bundle)
    bundle()
  })
})
