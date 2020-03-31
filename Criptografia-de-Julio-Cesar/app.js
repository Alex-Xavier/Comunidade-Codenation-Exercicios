const express = require ('express')
const fetch = require ('node-fetch')
const fs = require ('fs')
const caesar = require ('caesar-encrypt')
const cryptoJs = require ('crypto-js')
const formData = require('form-data')

const app = express()

// Inicializando servidor na porta 8001
app.listen(8001, () => {
  console.log('Server on!')
})

// Fazendo requisição HTTP Get e salvando resposta em arquivo answer (após salvo não mais necessário executar)
/*fetch('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=a42a7bde25f7f1beb4303ba2ef068c9436f563d7')
  .then(res => res.text())
  .then(body => {
    console.log(body)
    fs.writeFileSync('answer.json', body)
  })*/

// Desencriptação da mensagem por meio da lib caesar-encrypt
caesar.decrypt('pszym', '5')


// Gerando Hash SHA1
const hash = cryptoJs.SHA1('you are bound to be unhappy if you optimize everything. donald e. knuth').toString()

// Lendo arquivo answer e o salvando como JSON
let fileBuffer = JSON.parse(fs.readFileSync('answer.json', 'utf8'))

// Salvando decifração e hash sha1
fileBuffer.decifrado = 'you are bound to be unhappy if you optimize everything. donald e. knuth'
fileBuffer.resumo_criptografico = hash

// Atualizando arquivo answer com decifração e hash sha1
fs.writeFileSync('answer.json', JSON.stringify(fileBuffer))

// Lendo arquivo atualizado
const answer = fs.readFileSync('answer.json', 'utf8')

// Configurando envio multipart/form-data
const form = formData()
form.append('file', answer)

// Enviando arquivo como multipart/form-data
fetch('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=a42a7bde25f7f1beb4303ba2ef068c9436f563d7', {
  method: 'POST',
  headers: {
    'Content-Type': 'multipart/form-data'
  },	
  body: form
})
  .then(res => res.json())
  .then(json => console.log(json))