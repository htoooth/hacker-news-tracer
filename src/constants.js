const path = require('path')
const moment = require('moment')
const todayFile = path.resolve('./md', moment().format('YYYY-MM-DD') + '.md')
const readmeFile = path.resolve('./README.md')

module.exports = {
  url: 'https://news.ycombinator.com/',
  file: todayFile,
  readme: readmeFile
}