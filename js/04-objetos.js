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
console.log(livro.volumes[1]);

//Exemplo 3: array de objetos
const livros = [
    {
        titulo: "Harry Poter",
        autor: "J.K Rowling"
    },
    {
        titulo: "Trono de Vidro",
        autor: "Sarah J. Mass"
    },
    {
        titulo: "Lovely War",
        autor: "Julie Berry"
    }
]

console.log(livros);
console.log(livros[2].autor);

/* Atividade de JavaScript (Objetos e Arrays)

--Crie um objeto chamado "aluno" contendo os seguintes dados:
Nome Completo
-Data de Nascimento
-(Use ARRAY) Lista de telefones (fixo e celular)
-(DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente): 
-rua
-número
-bairro
-Mostre no console o nome do aluno, o telefone celular e o bairro em que mora.*/

const aluno = {
    nome: "Ádila Ester Souza Gomes",
    nascimento: "16/06/2001",

    telefones: [
        "(11) 4002-8922",
        "(11) 9 5223-1098"
    ],

    endereco: {
        rua: "Canção Agalopada",
        numero: 35,
        bairro: "A. E. Carvalho"
    }
    }

console.log(aluno);
console.log(aluno.nome, aluno.telefones[1], aluno.endereco.bairro);

