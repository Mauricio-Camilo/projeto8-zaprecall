import React, { useState } from "react";
import Frente from "./Frente";
import Costas from "./Costas";

function Flashcard(props) {
    const [cardVirado, setCardVirado] = React.useState(false);

    return (
        <>
            {cardVirado ?
                <Costas flashcard={props.flashcard} resposta={props.resposta}/> :
                <Frente pergunta={props.pergunta} setCardVirado={setCardVirado} />
            }
        </>
    )
}

export default Flashcard;