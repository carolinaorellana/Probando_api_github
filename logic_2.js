var form= document.getElementById("formGit")

form.addEventListener ('submit', function(e){
    e.preventDefault();
    var search = document.getElementById("search").value ;
    // alert(search);

    fetch("https://api.github.com/users/"+search)
    .then(response => response.json() )
    .then(coderData =>{
        //se edita la versión del profesor para qie el div aparezca luego de dar click: 
        document.getElementById('cont1').innerHTML= "<h2>Usuario:</h2><h2 id='user'></h2><br><img id='avatar' src=''  alt='avatar_github'><br> <h3>Nombre:</h3> <h3 id='nombre'></h3>"
        /*Para el user*/
        let user = document.getElementById("user");
        user.innerHTML = coderData.login;
        /*Para la img */
        let avatar = document.getElementById("avatar");
        avatar.src = coderData.avatar_url;
        /*Para el nombre del usuario completo */
        let nombre = document.getElementById("nombre");
        nombre.innerHTML= coderData.name
        console.log(coderData)
    } 
    )
    .catch(err => console.log(err) )
}
)

//CODIGO DEL ANTERIOR
// function fetch_github_usuario() {
//     fetch("https://api.github.com/users/adion81")
//     .then(response => response.json() )
//     .then(coderData =>{
//         //se edita la versión del profesor para qie el div aparezca luego de dar click: 
//         document.getElementById('cont1').innerHTML= " <img id='avatar' src=''  alt='avatar_github'>"
//         let avatar = document.getElementById("avatar");
//         avatar.src = coderData.avatar_url
//         console.log(coderData)
//     } 
//     )
//     .catch(err => console.log(err) )
// }
