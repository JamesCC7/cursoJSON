//Peticion FETCH: permite obtener los datos de la URL en formato JSON

fetch ('/user.json')
.then(response =>  response.json())
.then(data => {
            //console.log(data);
            document.getElementById('personas').innerHTML =
            `<h1>${data.name} ${data.lastname}</h1>`
        })

    


