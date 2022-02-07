
function invertir (numero) {
    return Number(numero.toString().split("").reverse().join("")) 
}

var num = 28635
console.log(invertir(num))