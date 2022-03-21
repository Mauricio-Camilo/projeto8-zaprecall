import React from "react"
import setinha from "../ZapRecall-Recursos/setinha.png"

function Frente(props) {
    return (
        <>
        <div class="flashcard">
            <p>{props.pergunta}</p>
            <img onClick={() => props.setCardVirado(true)} className="flashcard-flip" src={setinha}/>
        </div>
    
        </>
        
    )
}

export default Frente;