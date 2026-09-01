const livros = [
    {
        titulo: "O Hobbit",
        autor: "J. R. R. Tolkien",
        categoria: "Fantasia",
        ano: 1937,
        preco: 45.90,
        disponivel: true
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Ficção",
        ano: 1949,
        preco: 39.90,
        disponivel: false
    },
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        categoria: "Romance",
        ano: 1899,
        preco: 29.90,
        disponivel: true
    },
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J. K. Rowling",
        categoria: "Fantasia",
        ano: 1997,
        preco: 49.90,
        disponivel: true
    },
    {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Infantil",
        ano: 1943,
        preco: 25.00,
        disponivel: false
    },
    {
        titulo: "Duna",
        autor: "Frank Herbert",
        categoria: "Ficção",
        ano: 1965,
        preco: 59.90,
        disponivel: true
    }
];

console.log("--- Etapa 1: Listando os títulos ---");
livros.forEach(livro => {
    console.log(livro.titulo);
});

console.log("\n--- Etapa 2: Informações dos livros ---");
livros.forEach(livro => {
    console.log(`${livro.titulo} - ${livro.autor} - ${livro.categoria}`);
});

const titulos = livros.map(livro => livro.titulo);
console.log("\n--- Etapa 3: Lista de Títulos ---");
console.log(titulos);

const informacoes = livros.map(livro => `${livro.titulo} (${livro.ano}) - R$ ${livro.preco.toFixed(2)}`);
console.log("\n--- Etapa 4: Lista de Informações ---");
console.log(informacoes);

const disponiveis = livros.filter(livro => livro.disponivel);
console.log("\n--- Livros Disponíveis ---");
console.log(disponiveis);

const valorTotal = livros.reduce((acc, livro) => acc + livro.preco, 0);
console.log("\n--- Valor Total dos Livros ---");
console.log(`R$ ${valorTotal.toFixed(2)}`);