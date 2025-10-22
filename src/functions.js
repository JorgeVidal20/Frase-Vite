 function letters(string) {
    return string.length;
}
 function words(string){
    let palabras = string.split(" ");
    return palabras.length;
}
 function upperString(string){
    return string.toLocaleUpperCase();
}
 function titleString(string){
return string.toLowerCase().split(" ")
    .map(palabra => palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1))
    .join(" ");
}
 function backwardsLetters(string){
    return string.split("").reverse().join("");
}
 function backwardsWords(string){
  return string.split(" ").reverse().join(" ");
}
function palindrome(string){
    let stringMinusculas = string.toLowerCase().replaceAll(" ","");
    let stringMinusculasAlReves = backwardsLetters(stringMinusculas);
    if(stringMinusculas == stringMinusculasAlReves){
        return true;
    }else{
        return false;
    }
}

export {
    letters,
    words,
    upperString,
    titleString,
    backwardsLetters,
    backwardsWords,
    palindrome
};
    

