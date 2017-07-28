const superagent = require('superagent')

async function request(url) {
  return superagent.get(url)
}

module.exports = request
