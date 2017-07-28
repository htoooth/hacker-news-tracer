const cheerio = require('cheerio')
const url = require('url')

const { url: hackerUrl } = require('./constants')

function extract(html) {
  let $ = cheerio.load(html)

  return $('tr[id]', 'tbody').map((i, el) => {
    let $this = $(el)
    let id = $this.attr('id')
    let $title = $this.find('.title a')
    let link = $title.attr('href')
    let text = $title.text()

    let urlObj = url.parse(link)
    if (!(urlObj.protocol === 'http' || urlObj.protocol === 'https')) {
      link = hackerUrl + link
    }

    return {
      index: i,
      id,
      link,
      text
    }
  }).get()
}

module.exports = extract
