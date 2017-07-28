const path = require('path')

const request = require('./request')
const extract = require('./extract')
const write = require('./write')
const { url: hackerUrl, file } = require('./constants')

const fileType = path.extname(file).slice(1)
const title = path.basename(file).split('.')[0]

async function main() {
  let { text: html } = await request(hackerUrl)
  let items = extract(html)
  let render = require('./type/' + fileType)
  write(file, render(title, items))
}

main()
  .then(() => {
    console.log('task ok')
  })
  .catch((err) => {
    console.log('task wrong' + err)
  })