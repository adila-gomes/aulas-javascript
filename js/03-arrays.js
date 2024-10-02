console.log("Arrays!");

// Declarando um array
let alunos = ["Celaena Sardothien", "Aelin Galathinius", "Elentya"];
// Exibindo a estrutura do array
console.log(alunos);
// Acessando um elemento específico do array
console.log(`${alunos[2]} é a personagem principal da saga literária Trono de Vidro.`);

/* Mini exercicio:

-Crie um novo array contendo 7 coisas que você gosta

-Em seguida, mostre no console uma frase personalizada indicando o nome do segundo, quinto e do sétimo elemento do array.*/

let gostos = ["Trono de vidro", "Lovely War", "A cor Purpura", "Pobres Criaturas", "Assassinos da Lua das Flores", "Orange Is The New Black", "Monstros - Irmãos Menendez assassinos dos pais"];

console.log(gostos);
console.log(`Até o momento, no ano de 2024 essas foram as coisas que mais gostei das categorias: Livros, Filmes e Séries.\nLivro: ${gostos[1]}; \nFilme: ${gostos[4]}; \nSérie: ${gostos[6]}`);


/* Arrays como Matriz de 2 dimensões*/
const tecnologias = [
    ["HTML5", "CSS3", "JavaScript"], 
    ["Figma", "Fotoshop"],
    ["PHP", "Node.Js", "SQL", "Express", ["Apache", "IIS"]]
];

/* console.log(tecnologias); */
console.log(tecnologias[0][2]);
console.log(tecnologias[1][0]);
console.log(tecnologias[2][3]);
console.log(tecnologias[0][0]);
console.log(tecnologias[2][4][0]);


;


