
const fs = require('fs')

function write(file, data) {
  let readyData = fs.readSync(file)
  readyData += data
  return fs.writeFileSync(file, readyData)
}

module.exports = write