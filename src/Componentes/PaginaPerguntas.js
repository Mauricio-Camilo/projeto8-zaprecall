import React, { useState } from "react";
import Cabeçalho from "./Cabeçalho";
import RenderizarPerguntas from "./RenderizarPerguntas";
import Concluidos from "./Concluidos";

function PaginaPerguntas() {

    const listaPerguntas = [
        {flashcard: "Pergunta 1", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {flashcard: "Pergunta 2", pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {flashcard: "Pergunta 3", pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
        {flashcard: "Pergunta 4", pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {flashcard: "Pergunta 5", pergunta: "O ReactDOM nos ajuda __ ", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {flashcard: "Pergunta 6", pergunta: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {flashcard: "Pergunta 7", pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes "},
        {flashcard: "Pergunta 8", pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ]
    const [contador,setContador] = React.useState(0);
    listaPerguntas.sort(Comparador);
    
    return ( 
        (<div className="tela-principal">
            <div className="tela-2">
                <Cabeçalho />
                <div className="container">
                    {listaPerguntas.map(lista => <RenderizarPerguntas flashcard={lista.flashcard} pergunta={lista.pergunta} resposta={lista.resposta} contador={contador} setContador={setContador}/>
                    )}
                </div>
                <Concluidos contagem={contador} comprimento={listaPerguntas.length}/>
            </div>
        </div>)          
    )
                    
}

function Comparador () {
    return Math.random() - 0.5;
}

export default PaginaPerguntas;