function fetch_github_usuario() {
    fetch("https://api.github.com/users/adion81")
    .then(response => response.json() )
    .then(coderData =>{
        //se edita la versión del profesor para qie el div aparezca luego de dar click: 
        document.getElementById('cont1').innerHTML= " <img id='avatar' src=''  alt='avatar_github'>"
        let avatar = document.getElementById("avatar");
        avatar.src = coderData.avatar_url
        console.log(coderData)
    } 
    )
    .catch(err => console.log(err) )
}

/*llama o manda  buscar la info de esta api, luego encadena una response (funcion anonima):  vamos a contener en una respuesta y convertirlo en un JSON. Luego se encadena nuevamente en un coder data y si hay algun error se va a trapar un error en una funcion anonima. */ /*encadenamiento de los then son los puntos. */
/*En JS un JSON se le llama un OBJETO -en PYTHON son diccionarios(no son poropiamente un objeto.)*/ 
/*Para JS se pued eutilizar la notacion punto,  */