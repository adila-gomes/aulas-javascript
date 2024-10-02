// Exemplo 1: objeto com dados de uma pessoa
const pessoa = {
    //propriedade: valor
    nome: "Ádila", 
    idade: 23,
    cidade: "São Paulo",
    estado: "SP"
};

console.log(pessoa);
//Acessando determinasdas propriedades
console.log(`A ${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}-${pessoa.estado}.`);

//Exemplo 2: objeto com array
const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei "
    ]
}
console.log(livro);
