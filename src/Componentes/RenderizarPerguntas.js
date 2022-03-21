import React, { useState } from "react";
import Pergunta from "./Pergunta";
import Flashcard from "./Flashcard";


function RenderizarPerguntas(props) {
    const [answering, setAnswering] = React.useState(false);
    
    return (
        <>
        {answering? 

        <Flashcard flashcard={props.flashcard} pergunta={props.pergunta} 
        resposta={props.resposta} contador={props.contador} 
        setContador={props.setContador} setIcone={props.setIcone}
        array = {props.array} setArray = {props.setArray}/>: 

        <Pergunta flashcard={props.flashcard} setAnswering={setAnswering}/>}      
        </> 
    )
}

export default RenderizarPerguntas;