import React, { useState } from "react";


function RenderizarPerguntas(props) {
    const [answering, setAnswering] = React.useState(false);

    return (
        <>
        {answering? <FlashCard questao={props.pergunta}/> : <Pergunta questao={props.pergunta} setAnswering={setAnswering}/>  }      
        </> 
    )
}

// Essa função é meu estado atual, ou seja, o estado para true

function Pergunta (props) {
    // const [tela, setTela] = React.useState (true);
    return (
        <div class="perguntas">
            <p>{props.questao}</p>
            <ion-icon onClick={() => props.setAnswering(true)} class="perguntas-icone" name="play-outline"></ion-icon>
        </div>
    )
}

function FliparCard () {
    // setTela(!tela) s
}

// Essa função é meu estado futuro, ou seja, o estado para false

function FlashCard (props) {
    return (
        <div class="flashcard">
            <p>{props.questao}</p>
            <img class="flashcard-flip" src="./ZapRecall-Recursos/setinha.png"/>
        </div>
    )
}

export default RenderizarPerguntas;