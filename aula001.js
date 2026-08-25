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