"use strict";
let valorAny;
valorAny = 3;
valorAny = "Ola";
valorAny = true;
let valorString1 = 'teste';
let valorString2 = 'testao';
valorString1 = valorAny;
valorString2 = valorAny;
function somarStrings(string1, string2) {
    console.log(string1 + string2);
}
somarStrings(valorString1, valorString2);
somarStrings('Ola', ', como vai?');
