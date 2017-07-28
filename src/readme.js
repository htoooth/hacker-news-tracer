
const fs = require('fs')

function write(file, data) {
  return fs.writeFileSync(file, data, {
    flag: fs.constants.O_APPEND
  })
}

module.exports = write