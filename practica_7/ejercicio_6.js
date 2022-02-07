var cadena="esta es la frase de prueba para el ejercicio"

function repeticionesLetra(cadena,letra){
    cuenta = 0
    posicion = cadena.indexOf("p")
while ( posicion != -1 ) {
   cuenta++;
   posicion = cadena.indexOf("p",posicion+1)
    
    }
}


//Cuando meto el while dentro de la función ya no me arroja los resultados
//si utilizo el while sin meterlo en la función me arroja sin problema el resultado