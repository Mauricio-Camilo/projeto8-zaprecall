import React, { useState } from "react";
import Frente from "./Frente";
import Costas from "./Costas";

function Flashcard(props) {
    const [cardVirado, setCardVirado] = React.useState(false);

    return (
        <>
            {cardVirado ?

                <Costas flashcard={props.flashcard} resposta={props.resposta} 
                contador={props.contador} contador={props.contador} 
                setContador={props.setContador} setIcone={props.setIcone}
                array = {props.array} setArray = {props.setArray}/> :
                
                <Frente pergunta={props.pergunta} setCardVirado={setCardVirado} />
            }
        </>
    )
}

export default Flashcard;