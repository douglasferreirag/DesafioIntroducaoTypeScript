"use strict";
class Mamifero {
    constructor(nome, temPelos, quantidadeDePatas) {
        this.nome = nome;
        this.temPelos = temPelos;
        this.quantidadeDePatas = quantidadeDePatas;
    }
    dizerNome() {
        console.log('Meu nome é: ', this.nome);
    }
}
const cachorro = new Mamifero('billy', true, 4);
cachorro.dizerNome();
const object = {
    nome: 'string',
    idade: 23232
};
