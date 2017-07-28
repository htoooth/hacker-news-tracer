const fs = require('fs')

function writeFile(file, data) {
  fs.writeFileSync(file, data)
}

module.exports = writeFile