const fs = require('fs')
const path = require('path')

const distFilePath = path.resolve('./gen/genres.json')
const sourceFilePath = path.resolve('./src/genre.txt')

let genDir = path.resolve("./gen")
if (!fs.existsSync(genDir)) {
    fs.mkdirSync(genDir)
}

if (fs.existsSync(distFilePath)) {
    fs.unlinkSync(distFilePath)
}

const lines = fs.readFileSync(sourceFilePath, 'utf-8').split(/\r?\n/)
let array = new Array

lines.forEach(line => array.push(line))
fs.writeFileSync(distFilePath, JSON.stringify(array))

console.log('✅ Files are generated successfully!')
