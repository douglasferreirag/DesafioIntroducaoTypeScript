const pessoa = {

        nome: 'Mariana',
        idade: 28,
        profissão: 'desenvolvedora'

}

pessoa.idade = 25;

const andre : {nome: string, idade: number, profissão: string} = {

    nome: 'Andre',

    idade: 25,

    profissão: 'pintor'



}


const paula : {nome: string, idade: number, profissão: string} = {

    nome: 'Paula',

    idade: 25,

    profissão: 'Desenvolvedora'



}

enum Profissao {

    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol

}

interface Pessoa{

    nome: string,
    idade: number,
    profissao?: Profissao


}

interface estudante extends Pessoa{

    materias: string[],



}

const vanessa: Pessoa =  {

        nome: 'Vanessa',
        idade: 28,
        profissao : Profissao.Desenvolvedora

}


const maria: Pessoa =  {

    nome: 'Maria',
    idade: 28,
    profissao : Profissao.Desenvolvedora

}

const jessica: estudante = {

    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias : ['Matemática discreta', 'programação']

}

const monica: estudante = {

    nome: 'Jessica',
    idade: 28,
    materias : ['Matemática discreta', 'programação']

}

function listar(lista: string[]){

    for (const item of lista){

            console.log('.', item);

    }

}

listar(monica.materias);