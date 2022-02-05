
function palindromo(word) {
    if (word == word.split('').reverse().join('')){
        console.log(word +  " Es un palindromo")
    } else {
        console.log(word + " No es un palindromo")
    }

}

palindromo("madam")
