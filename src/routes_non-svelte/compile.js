const path = require('path')
const watch = process.argv[2] && process.argv[2] !== 'false' ? true : false 
const no = require('node-html')
const outputPath = path.resolve(__dirname, '../../static/js/index.bundle.js')
no.compile(watch, false, 'index.js', path.resolve(__dirname, outputPath))