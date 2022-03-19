function Frente(props) {
    return (
        <>
        <div class="flashcard">
            <p>{props.pergunta}</p>
            <img onClick={() => props.setCardVirado(true)} className="flashcard-flip" src="./ZapRecall-Recursos/setinha.png" />
        </div>
    
        </>
        
    )
}

export default Frente;