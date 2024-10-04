/* Principais comandos de repetição

- while  -> ENQUANTO
- for    -> PARA

São comandos de uso geral, existem em praticamente qualquer linguagem de reprodução.*/

//Exemplo 1: while
let contador = 1;

while(contador <= 5){
    console.log("Valor do contador é: " +contador);
    contador++; // ++ operador de incremento
}

//Exemplo 2: for
for(let contador = 1; contador <= 10; contador++){
    console.log("oiiiiii cabeção" +contador+"ª vez!");
}

/* Nomeclatura para variáveis de controle 
Embora possamos dar qualquer nome (como contador por exemplo), geralmentesão usadas as letras i, j ou k (ou outras letras se necessário)*/
for(let i = 1; i <= 3; i++){
    console.log("Valor de i é"+i);
}

console.log("---\n");

/* Loops exclusivos do JS para estruturas de dados */

//for/of -> loop para arrays
const filmes =["Alien x Predador", "Os fantasmas se divertem", "A noiva cadáver", "O estranho mundo de Jack", "Como eu era antes de você", "Marley e eu"];

for(const filme of filmes){
    console.log(filme); 
}

console.log("---\n");

//Usando o for tradicional
let quantidade = filmes.length; //guardando o tamanho do array uma vez
for(let i = 0; i < quantidade; i++){
    console.log(filmes[i]);
}

console.log("---\n");

//for/in -> loop para objetos
const pessoa = {
    nome: "Ádila",
    idade: 23,
    cidade: "São Paulo",
    estado: "SP",
    email: "adilaester01@gmail.com",
    time: "Nenhum"
}

for(const prop in pessoa){
    //Mostrar somente o nome da propriedade
    console.log(prop);
    //Mostrar somente o valor da propriedade
    console.log(pessoa[prop]);
}

console.log("---\n");

/* Exercicios
1) Faça um array chamado "clientes" contendo 3 objetos. Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Goku", "Naruto" e "Kaneki") 

2) Faça um loop (qualquer um) e mostre no console os dados de cada cliente conforme a seguir:

- Cliente: Goku, id: 1
- Cliente: Naruto, id: 2
- Cliente: Kaneki, id: 3
*/

const clientes = [
    {
        nome: "Goku",
        id: 1
    },
    {
        nome: "Naruto",
        id: 2
    },
    {
        nome: "Kaneki",
        id: 3
    }
]

for(const cliente of clientes){
    console.log(cliente); 
}