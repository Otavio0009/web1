// var - escopo global, não é recomendado utilizar

var nome = "Otávio";

// let - escopo de bloco, padrão atual

let pet = "Lua";

// const - escopo de bloco, não pode ter seu valor modificado

const idade = 19;

// tipos de variaveis

const x = 10;
const possuiAbilitacao = false;
const pi = 3.14;

// typeof verifica o tipodeo da variabvel

console.log("x = ", x, typeof x);
console.log("Possui Abilitação: ", possuiAbilitacao, typeof possuiAbilitacao);
console.log("pi = ", pi, typeof pi);
console.log("Nome = ", nome, typeof nome);

console.log("Nome = ", nome.toUpperCase());
console.log("Nome = ", nome.toLocaleLowerCase());
console.log(nome.length);

// Templeit String:
let curso = "ADS";
let disciplina = "WEB 1";

console.log(`A diciplina ${disciplina} faz parte da do curso ${curso}`);

// Decisão e repetição

// if - else if - else

const maiorDeIdade = false

if (possuiAbilitacao && maiorDeIdade) {
    console.log("Pode dirigir");

} else {
    console.log("Não pode dirigir");
}

// for
console.log("1...10");

for (let index = 0; index < 10; index++) {
    console.log(index + 1);
    
}

console.log();

// while
console.log("1...10");
let i = 0

while (i < 10) {
    console.log(i + 1);
    i++;
}

// funções

function somar(x, y) {
    return x + y;
};

console.log("10 + 10 = ", somar(10, 10));

// Função anonima

const subitrair = function (x, y){
    return x - y
};

console.log("10 - 5 =", subitrair(10, 5));

// Arrow function, variantes

// 1
const mutiplicar = (x, y) => {
    return x * y;
}

console.log("10 * 10 =", mutiplicar(10, 10));

// 2

const dobrar = (x) => x * 2;

console.log("10 * 2 =", dobrar(10));

// 3
// quando so tem um parametro

const dividir = x => x / 2;

console.log("10 / 2 =", dividir(10));

// 4
// nenhum parametro

const tripicar = () => console.log("10 * 3 =", 10 * 3);
tripicar();

// arrys

const frutas = ["maçã", "banana", "uva"];

console.log(frutas[0]);

const array = (lista) => {
    console.log("\nConteudo da lista");

    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log(element);
    }
}

frutas.push("laranja");
array(frutas, "---- Lingugens ----");

frutas.push("manga");
array(frutas, "---- Lingugens ----");

// poo

let aluno = {
    nome: "Otávio",
    idade: 19,
    curso: "ADS"
}

console.log("Nome do aluno: ", aluno.nome);
console.log("Idade do aluno: ", aluno.idade);
console.log("Curso do aluno: ", aluno.curso);
console.log(aluno);
console.log(`O ${aluno.nome} tem ${aluno.idade} anos e faz ${aluno.curso}`);

//arrays de Objetos

const produtos = [
    {
        codigo: "Xbox X",
        preco: 100000,
        categoria: "Game"
    }, {
        codigo: "GTA VII",
        preco: 600,
        categoria: "Game"
    }, {
        codigo: "COD",
        preco: 100,
        categoria: "Game"
    }

];

array(produtos, "Produtos: ");

for (let index = 0; index < produtos.length; index++) {
    if(produtos[index].preco >= 10000) {
        console.log(produtos[index].codigo);
    }
}