const express = require ('express')
const fetch = require ('node-fetch')
const fs = require ('fs')
const fse = require ('fs-extra')
const caesar = require ('caesar-encrypt')
const CryptoJS = require ('crypto-js')

const app = express()

//app.use(express.static(__dirname + '/frontend'))

app.listen(8001, () => {
  console.log('Server on!')
})

fetch('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=a42a7bde25f7f1beb4303ba2ef068c9436f563d7')
  .then(res => res.text())
  .then(body => fs.writeFileSync('answer.json', body))

caesar.decrypt('pszym', '5')

const hash = CryptoJS.SHA1('you are bound to be unhappy if you optimize everything. donald e. knuth').toString()

let fileBuffer = JSON.parse(fs.readFileSync('answer.json', 'utf-8'))

fileBuffer.decifrado = 'you are bound to be unhappy if you optimize everything. donald e. knuth'
fileBuffer.resumo_criptografico = hash

fse.remove('answer.json', err => {
  if (err) {
    return console.error(err)
  }
})

//, JSON.stringify(fileBuffer)