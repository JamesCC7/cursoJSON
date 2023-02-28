{
    const user ={
        name:"Jaime",
        lastname:"Cepeda",
        age:20,
        nickname: "james",
        hobbies:["run","code","eat"],
        address:{
            street:"123 Main st",
            city: "New York"
        },
        married:"false",
        greet(){
            return 'Hello world'
        }
    }

    const friends = [
        { name: "Juan", nickname: "fazt" },
        { name: "Carlos", nickname: "jesus123" },
        { name: "Ana", nickname: "maria24" },
        { name: "Lucas", nickname: "luis123" },
        { name: "Pedro", nickname: "oscar12" }
    ]
     
    user.friends = friends;
    
    let output = '';

    for(let i = 0; i < friends.length; i++){
        output = output + `<li>${friends[i].name} - ${friends[i].nickname}</li>`
    }

    //Impresion de lista en vista HTML
    document.getElementById('personas').innerHTML = output;

    console.log(JSON.stringify(user));  

    //Json.parse ===> permite convertir objetos JSON a objetos JS
    console.log(JSON.parse(JSON.stringify(user)));
}