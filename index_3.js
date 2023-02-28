//Peticion FETCH: permite obtener los datos de la URL en formato JSON

let postsElements = '';

fetch ('https://jsonplaceholder.typicode.com/posts').then(
    response => {
        return response.json();
    })
    .then(
        data => {
            //console.log(data);
            for(let i = 0; i < data.length; i++){
                postsElements += `<li>${data[i].userId} - ${data[i].title}</li>`
            }
            document.getElementById('posts').innerHTML = postsElements;
        }
    )

    


