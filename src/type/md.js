
function genTitle(title) {
  return `# ${title}`
}

function genItem(item)  {
  return `${item.index + 1}. [${item.text}](${item.link})`
}

function markdown(title, items) {
  let markdown = [];
  markdown.push(genTitle(title))
  markdown.push((items || []).map(genItem).join('\n'))
  return markdown.join('\n')
}

module.exports = markdown