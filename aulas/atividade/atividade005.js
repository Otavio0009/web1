const alunos = [
    {
        nome: "Rafael",
        idade: 22,
        curso: "ADS",
        notas: [7.0, 8.0, 10.0]
    },
    {
        nome: "Lucas",
        idade: 20,
        curso: "Engenharia",
        notas: [6.0, 8.2, 9.0]
    },
    {
        nome: "Fernanda",
        idade: 23,
        curso: "ADS",
        notas: [7.0, 8.5, 7.0]
    },
    {
        nome: "Beatriz",
        idade: 19,
        curso: "Engenharia",
        notas: [4.0, 5.0, 3.0]
    },
    {
        nome: "Matheus",
        idade: 21,
        curso: "ADS",
        notas: [5.0, 6.0, 5.5]
    }
];

const calcularMedia = (notas) => {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
};

console.log("--- 1. Alunos de ADS ---");
const alunosADS = alunos.filter(aluno => aluno.curso === "ADS");
alunosADS.forEach(aluno => console.log(aluno.nome));

console.log("\n--- 2. Nomes e Médias de ADS ---");
alunosADS.forEach(aluno => {
    const media = calcularMedia(aluno.notas);
    console.log(`${aluno.nome} - Média: ${media.toFixed(2)}`);
});

console.log("\n--- 3. Aluno com maior média geral ---");
const alunoMaiorMediaGeral = alunos.reduce((maior, atual) => {
    return calcularMedia(atual.notas) > calcularMedia(maior.notas) ? atual : maior;
});
console.log(`${alunoMaiorMediaGeral.nome} (Média: ${calcularMedia(alunoMaiorMediaGeral.notas).toFixed(2)})`);

console.log("\n--- 4. Aluno com maior média de ADS ---");
const alunoMaiorMediaADS = alunosADS.reduce((maior, atual) => {
    return calcularMedia(atual.notas) > calcularMedia(maior.notas) ? atual : maior;
});
console.log(`${alunoMaiorMediaADS.nome} (Média: ${calcularMedia(alunoMaiorMediaADS.notas).toFixed(2)})`);

console.log("\n--- 5. Aluno mais jovem de Engenharia ---");
const alunosEngenharia = alunos.filter(aluno => aluno.curso === "Engenharia");
const alunoMaisJovemEng = alunosEngenharia.reduce((maisJovem, atual) => {
    return atual.idade < maisJovem.idade ? atual : maisJovem;
});
console.log(`${alunoMaisJovemEng.nome} (${alunoMaisJovemEng.idade} anos)`);

console.log("\n--- 6. Média da turma de ADS ---");
const somaMediasADS = alunosADS.reduce((acc, aluno) => acc + calcularMedia(aluno.notas), 0);
const mediaTurmaADS = somaMediasADS / alunosADS.length;
console.log(`Média da turma: ${mediaTurmaADS.toFixed(2)}`);

console.log("\n--- 7. Nomes e Status dos alunos ---");
alunos.forEach(aluno => {
    const media = calcularMedia(aluno.notas);
    let status = "";

    if (media >= 7.0) {
        status = "APROVADO";
    } else if (media >= 5.0) {
        status = "FINAL";
    } else {
        status = "REPROVADO";
    }

    console.log(`${aluno.nome} - Média: ${media.toFixed(2)} - Status: ${status}`);
});