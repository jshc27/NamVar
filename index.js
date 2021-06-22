import { getNumberOfChars, getLower, getUpper } from "./operations.js";


// Variables: Repuestas de cada metodo.

var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');

var name = document.querySelector('#your-name');

name.addEventListener("keyup", () => {  //Escuchar eventos

    answer1.textContent = getNumberOfChars(name.value);
    answer2.textContent = getLower(name.value);
    answer3.textContent = getUpper(name.value);

});