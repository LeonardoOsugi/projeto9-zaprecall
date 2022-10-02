

import Cards from "./Cards"

export default function Perguntas(){
    const perguntas = [{flashcard: "Pergunta 1", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
     {flashcard: "Pergunta 2", pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
     {flashcard: "Pergunta 3", pergunta: "Componentes devem iniciar com?", resposta: "letra maiúscula"},
    {flashcard: "Pergunta 4", pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
    {flashcard: "Pergunta 5", pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
    {flashcard: "Pergunta6", pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"},
    {flashcard: "Pergunta 7", pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes"},
    {flashcard: "Pergunta 8", pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}];
    return(
        <>
            {perguntas.map((p, i) => 
                <Cards key={i} flashcards={p.flashcard} perguntas={p.pergunta} respostas={p.resposta}/>
            )}
        </>
    )
}