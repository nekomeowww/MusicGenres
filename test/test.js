const fs = require('fs')
const path = require('path')

const sourceFilePath = path.resolve('./src/genre.txt')

if (!fs.existsSync(sourceFilePath)) {
    const err = new Error('Missing source file: genre.txt')
    err.name = 'Source File Missing Error'
    throw err
}
else {
    console.log('✅ Directory All Green to Go!')
}