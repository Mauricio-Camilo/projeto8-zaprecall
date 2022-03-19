function Pergunta(props) {
        return (
            <div class="perguntas">
                <p>{props.flashcard}</p>
                <ion-icon onClick={() => props.setAnswering(true)} class="perguntas-icone" name="play-outline"></ion-icon>
            </div>
        )
}

export default Pergunta;