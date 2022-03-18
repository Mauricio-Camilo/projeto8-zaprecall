import React, { useState } from "react";
import Pergunta from "./Pergunta";
import Flashcard from "./Flashcard";


function RenderizarPerguntas(props) {
    const [answering, setAnswering] = React.useState(false);
    const [cardVirado, setCardVirado] = React.useState(false);

    return (
        <>
        {answering? 
        <Flashcard pergunta={props.pergunta} resposta={props.resposta} estado={cardVirado} cardVirado={setCardVirado}/> : 
        <Pergunta flashcard={props.flashcard} setAnswering={setAnswering}/>}      
        </> 
    )
}

export default RenderizarPerguntas;