const path = require('path')
const moment = require('moment')
const todayFile = path.resolve('./md', moment().format('YYYY-MM-DD') + '.md')

module.exports = {
  url: 'https://news.ycombinator.com/',
  file: todayFile,
}