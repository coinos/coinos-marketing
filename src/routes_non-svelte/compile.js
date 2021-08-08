const path = require('path')
const watch = process.argv[2] && process.argv[2] !== 'false' ? true : false 
const compress = process.argv[3] && process.argv[3] !== 'false' ? true : false  
const no = require('node-html')
const outputPath = path.resolve(__dirname, '../../static/js/index.bundle.js')
no.compile(watch, compress, 'index.js', path.resolve(__dirname, outputPath))