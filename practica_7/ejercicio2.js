var numbers = [1, 2, 3, 4, 10, 11]
var suma = 0


function sumaTotal(arreglo){
    for(var i = 0; i<numbers.length; i++){
        suma = suma + numbers [i]
    }
    return suma
}

console.log(sumaTotal(numbers))