
var frase = ["Hola", "mundo"]

function palabraBuscada(oracion, palabra) {
    for(var i = 0; i<oracion.length; i++){
        if(oracion.includes(palabra)){
            console.log(true)
            break
        }
    }  
}

palabraBuscada(frase, "mundo")
