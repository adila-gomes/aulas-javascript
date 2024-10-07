/* Funções de acesso de manipulação da DOM

querySelector() - é uma função para selecionar um único elemento da página (DOM).

querySelectorAll() - é uma função para selecionar vários elementos na página (DOM).

Nos dois casos, a seleção é feitausando seletores comuns ao que fizemos no CSS. */

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
const ex1 = document.querySelector("#exemplo01")
const msg = document.querySelector("#mensagem")

ex1.addEventListener("click", function(){
    msg.innerHTML = "Olá 🔥!"
})