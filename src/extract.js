const cheerio = require('cheerio')

function extract(html) {
  let $ = cheerio.load(html)

  return $('tr[id]', 'tbody').map((i, el) => {
    let $this = $(el)
    let id = $this.attr('id')
    let $title = $this.find('.title a')
    let link = $title.attr('href')
    let text = $title.text()

    return {
      index: i,
      id,
      link,
      text
    }
  }).get()
}

module.exports = extract
