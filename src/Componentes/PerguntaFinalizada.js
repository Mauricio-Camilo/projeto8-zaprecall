function PerguntaFinalizada (props) {

    if (props.cor === "vermelho") {
        return (
            <div className="perguntas">
                <p className="respondido icone-vermelho">{props.flashcard}</p>
                <ion-icon class = "icone-vermelho" name="close-circle"></ion-icon>
            </div>
        )
    }
    if (props.cor === "laranja") {
        return (
            <div className="perguntas">
                <p className="respondido icone-laranja">{props.flashcard}</p>
                <ion-icon class = "icone-laranja" name="help-circle"></ion-icon>
            </div>
        )
    }
    if (props.cor === "verde") {
        return (
            <div className="perguntas">
                <p className="respondido icone-verde">{props.flashcard}</p>
                <ion-icon class = "icone-verde" name="checkmark-circle"></ion-icon>
            </div>
        )
    }
}


export default PerguntaFinalizada;
