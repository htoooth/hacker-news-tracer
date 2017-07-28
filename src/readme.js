
const fs = require('fs')

function write(file, data) {
  let readyData = fs.readFileSync(file)
  readyData += data
  return fs.writeFileSync(file, readyData)
}

module.exports = write