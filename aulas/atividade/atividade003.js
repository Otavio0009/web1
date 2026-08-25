const array = (lista) => {
    console.log("\nConteudo da lista");
    let soma = 0;

    for (let index = 0; index < lista.length; index++) {
        soma += lista[index].idade
        
    }

    console.log(`A media de idade é ${soma / lista.length}`);
}

const aluno = [
    {
        nome: "Otávio",
        idade: 19,
        matricula: "123.456.789",
        curso: "ADS"
    },
    {
        nome: "Thales",
        idade: 18,
        matricula: "123.456.790",
        curso: "CC"
    },
    {
        nome: "Julio",
        idade: 19,
        matricula: "123.456.791",
        curso: "ES"
    }
];

for (let index = 0; index < aluno.length; index++) {
    const element = aluno[index];
    console.log(element.nome);
    
}

console.log();

for (let index = 0; index < aluno.length; index++) {

    if(aluno[index].curso === "ADS") {
        console.log(aluno[index].nome);
    }
    
}

array(aluno);