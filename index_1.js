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

    //console.log(user);
    //console.log(user.name);
    //console.log(user.lastname);
    //console.log(user.hobbies);
    console.log(user.greet());
    
    //Stringify: convierte el objeto JS a un objeto JSON valido
    //El conversion Stringify no considera funciones en objeto JSON
    console.log(JSON.stringify(user));      
}