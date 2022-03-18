function Flashcard(props) {
    return (
        <>
            {props.cardVirado ?
                <Costas resposta={props.resposta} /> :
                <Frente pergunta={props.pergunta} cardVirado={props.cardVirado} />
            }
        </>
    )
}

function Frente(props) {
    return (
        <div class="flashcard">
            <p>{props.pergunta}</p>
            <img onClick={() => props.cardVirado(true)} className="flashcard-flip" src="./ZapRecall-Recursos/setinha.png" />
        </div>
    )
}

function Costas(props) {
    return (
        <div class="flashcard costas">
            <p>{props.resposta}
            </p>
            <div class="respostas">
                <div class="resposta vermelho">
                    <span>Não lembrei</span>
                </div>
                <div class="resposta laranja">
                    <span>Quase não lembrei</span>
                </div>
                <div class="resposta verde">
                    <span>ZAP!</span>
                </div>
            </div>
        </div>
    )
}

export default Flashcard;