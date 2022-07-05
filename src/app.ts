interface teste{

    nome: string,
    idade: number

}

interface humano{

        nome: string,
        idade: number,
        endereco: string

}

class Mamifero{

        public nome: string;

        public temPelos: boolean;

        public quantidadeDePatas: number;
        


        constructor(nome: string, temPelos: boolean, quantidadeDePatas: number){

            this.nome = nome;

            this.temPelos = temPelos;

            this.quantidadeDePatas = quantidadeDePatas;

          

        }

        public dizerNome(){

                console.log('Meu nome é: ', this.nome);
    
        }



}

const cachorro = new Mamifero('billy', true, 4);

cachorro.dizerNome();


const object: teste = {

    nome: 'string',

    idade: 23232

}