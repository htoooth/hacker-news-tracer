const path = require('path')
const fs = require('fs')

const request = require('./request')
const extract = require('./extract')
const write = require('./write')
const readme = require('./readme')
const { url: hackerUrl, file, readme: readmeFile } = require('./constants')

const fileType = path.extname(file).slice(1)
const title = path.basename(file).split('.')[0]

async function main() {
  let { text: html } = await request(hackerUrl)
  let items = extract(html)
  let render = require('./type/' + fileType)

  try {
    write(file, render(title, items))
  } catch (err) {
    console.log('hackernews', file, err)
  }

  let result = fs.readFileSync(file, {encoding: 'UTF-8'})
  console.log(result);

  try {
    readme(readmeFile, `### [${title}](./md/${path.basename(file)}) \n`)
  } catch(err) {
    console.log('readme', readmeFile, err);
  }
}

main()
  .then(() => {
    console.log('task ok')
  })
  .catch((err) => {
    console.log('task wrong' + err)
  })