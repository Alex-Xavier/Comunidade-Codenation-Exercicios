function fazerRequisicao(){
	const url = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=a42a7bde25f7f1beb4303ba2ef068c9436f563d7'

	const request = new XMLHttpRequest()
	request.open("GET", url, true)

	request.onreadystatechange = function(){
		if (request.readyState == 4 && request.status == 200) {
			let jsonResponse = request.response
			jsonResponse = JSON.stringify(jsonResponse)
			//fs.writeFileSync(arquivo, jsonResponse)
			console.log(jsonResponse)
		}
	}

	request.send();
}