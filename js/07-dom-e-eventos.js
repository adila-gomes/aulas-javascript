/* Funções de acesso de manipulação da DOM

querySelector() - é uma função para selecionar um único elemento da página (DOM).

querySelectorAll() - é uma função para selecionar vários elementos na página (DOM).

Nos dois casos, a seleção é feita usando seletores comuns ao que fizemos no CSS. 

document.getElementById("sem #"), só funciona para seleção através do ID.*/

//Exemplos
const titulo = document.querySelector("h1");

const textoDom = document.querySelector(".texto-dom")

const subtitulos = document.querySelectorAll("h2")
/* console.log(subtitulos);
console.log(subtitulos[0]);*/
const varios = document.querySelectorAll("p, img, figure, button")

//Modificando elementos no DOM
titulo.textContent = "Olá JavaScript!"
textoDom.innerHTML = "<i>Márcio será reprovado!</i>"

/* Selecionar todos os links da lista de referências e colocar neles o atributo target valendo _blank */
const listas = document.querySelectorAll(".lista-de-referencias a")
console.log(listas);
//Se fosse um por um
/* lista[0].setAttribute("target", "_blank") */
for(const lista of listas){
    /* Versão moderna, vale para qualquer atributo, antigos, novos e personalizados*/
    lista.setAttribute('target', '_blank');
    /* Versão antiga, usando atributo via propriedade. Vale para atributos nativos do HTML (ex: id) */
    /* lista.target = '_blank'; */
}

/* Manipulando Eventos */
const ex1 = document.querySelector("#exemplo01");
const msg = document.querySelector("#mensagem");
const pagina = document.querySelector("body");
/* Função Ouvinte de evento (Event Listener)
Aplicado o elemento ao alvo desejado ("click") e uma função para executar as ações a partir do evento. OBS.: esta funçãp é considerada do tipo "anônima" e é conhecida como "callback" */
ex1.addEventListener("click", function(){
    //acessamos o parágrafo vazio e colocamos o conteúdo dentro dele
    msg.innerHTML = "Olá 🔥!"
    //alterando a fonte (CSS via JS)
    pagina.style.fontFamily = "Verdana";
});

//Ouvinte de evento para voltar ao normal (sem texto no parágrafo e com fonte padrão)
msg.addEventListener("dblclick", function(){
    msg.innerHTML = ""
    pagina.style.fontFamily = "initial"
})

/* Exemplo 2: modo noturno*/
const botaoAtivar = document.querySelector("#ativar");
botaoAtivar.addEventListener("click", function(){
    /* Usamos o toggle do ClassList oara alternar as aplicações (LIGA/DESLIGA) */
    pagina.classList.toggle("noturno")
    
    /* Desafio: Trocar o texto do botão */
    
    if(botaoAtivar.textContent== "Ativar"){
        botaoAtivar.textContent = "Desativar"
    }
    else {
        botaoAtivar.textContent = "Ativar"
    };

    /* Outra forma
    if(pagina.classList.contains("noturno")){
        botaoAtivar.textContent = "Desativar"
    }
    else {
        botaoAtivar.textContent = "Ativar"
    };*/
});

/* Sobre o duplo e triplo sinal de igual */

let a = "10";
let b = 10;
let resultado = a === b;

console.log(resultado);

/* == compara valores
   === compara valores e tipo de dado */