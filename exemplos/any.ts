let valorAny: any;

valorAny = 3;

valorAny = "Ola";

valorAny = true;

let valorString1: string = 'teste';

let valorString2: string = 'testao';

valorString1 = valorAny;

valorString2 = valorAny;

function somarStrings(string1: string, string2: string){

        console.log(string1+ string2);

}

somarStrings(valorString1, valorString2);

somarStrings('Ola', ', como vai?');