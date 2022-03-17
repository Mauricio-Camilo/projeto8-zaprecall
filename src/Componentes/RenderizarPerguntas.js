function RenderizarPerguntas(props) {
    return (
        <div class="perguntas">
            <p>{props.pergunta}</p>
            <ion-icon class="perguntas-icone" name="play-outline"></ion-icon>
        </div>
    )
}

export default RenderizarPerguntas;