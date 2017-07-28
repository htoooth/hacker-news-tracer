const path = require('path')
const fs = require('fs')

const request = require('./request')
const extract = require('./extract')
const write = require('./write')
const readme = require('./readme')
const { url: hackerUrl, file, readme: readmeFile } = require('./constants')
// const html = require('./html')

const fileType = path.extname(file).slice(1)
const title = path.basename(file).split('.')[0]

async function main() {
  let { text: html } = await request(hackerUrl)
  let items = extract(html)
  let render = require('./type/' + fileType)

  console.log('start markdown', file)
  try {
    write(file, render(title, items))
  } catch (err) {
    console.log('hackernews', file, err)
    throw err
  }

  console.log('start readme', readmeFile)
  try {
    readme(readmeFile, `### [${title}](./md/${path.basename(file)}) \n`)
  } catch(err) {
    console.log('readme', readmeFile, err);
    throw err
  }
}

main()
  .then(() => {
    console.log('task ok')
  })
  .catch((err) => {
    console.log('task wrong' + err)
  })