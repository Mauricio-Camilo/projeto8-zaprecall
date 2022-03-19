import React, { useState } from "react";
import Frente from "./Frente";
import Costas from "./Costas";

function Flashcard(props) {
    const [cardVirado, setCardVirado] = React.useState(false);

    return (
        <>
            {cardVirado ?
                <Costas flashcard={props.flashcard} resposta={props.resposta} contador={props.contador} finalizado={props.finalizado} setFinalizado={props.setFinalizado} contador={props.contador} setContador={props.setContador}/> :
                <Frente pergunta={props.pergunta} setCardVirado={setCardVirado} />
            }
        </>
    )
}

export default Flashcard;