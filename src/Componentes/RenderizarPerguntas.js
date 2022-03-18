import React, { useState } from "react";
import Pergunta from "./Pergunta";
import FlashcardFrente from "./FlashcardFrente";


function RenderizarPerguntas(props) {
    const [answering, setAnswering] = React.useState(false);

    return (
        <>
        {answering? <FlashcardFrente questao={props.pergunta}/> : <Pergunta questao={props.flashcard} setAnswering={setAnswering}/>}      
        </> 
    )
}

export default RenderizarPerguntas;