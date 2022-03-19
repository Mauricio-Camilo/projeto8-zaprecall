import React, { useState } from "react";
import Pergunta from "./Pergunta";
import Flashcard from "./Flashcard";


function RenderizarPerguntas(props) {
    const [answering, setAnswering] = React.useState(false);
    // const [cor, setCor] = React.useState("preto");

    return (
        <>
        {answering? 
        <Flashcard flashcard={props.flashcard} pergunta={props.pergunta} resposta={props.resposta} contador={props.contador} setContador={props.setContador}/> : 
        <Pergunta flashcard={props.flashcard} setAnswering={setAnswering}/>}      
        </> 
    )
}

export default RenderizarPerguntas;