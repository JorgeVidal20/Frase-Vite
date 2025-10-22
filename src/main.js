import * as functions from './functions.js';

document.querySelector('#app').innerHTML = `
<p> Abre la consola </p>
`

let frase = prompt ("Introduce una frase");

let contarletras = functions.letters(frase);
console.log(contarletras);

let contarPalabras = functions.words(frase);
console.log(contarPalabras);

let fraseMayuscula = functions.upperString(frase);
console.log(fraseMayuscula);

let primeraMayuscula = functions.titleString(frase);
console.log(primeraMayuscula);

let reversaLetras = functions.backwardsLetters(frase);
console.log(reversaLetras);

let reversaPalabras = functions.backwardsWords(frase);
console.log(reversaPalabras);

let devolver = functions.palindrome(frase);
if(devolver){
    console.log("es palindromo");
}else{
    console.log("No es palindromo");
}
