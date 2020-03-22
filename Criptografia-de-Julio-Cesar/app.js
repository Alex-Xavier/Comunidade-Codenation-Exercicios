const express = require ('express')
const fetch = require ('node-fetch')
const fs = require ('fs')

const app = express()

//app.use(express.static(__dirname + '/frontend'))

app.listen(8001, () => {
  console.log('Servidor rodando!')
})

fetch('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=a42a7bde25f7f1beb4303ba2ef068c9436f563d7')
  .then(res => res.text())
  .then(body => fs.writeFileSync('answer.json', body))