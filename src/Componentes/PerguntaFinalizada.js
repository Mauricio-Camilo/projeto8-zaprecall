function PerguntaFinalizada (props) {

    if (props.cor === "vermelho") {
        return (
            <div className="perguntas">
                <p className="respondido red">{props.flashcard}</p>
                <ion-icon class = "icone red" name="close-circle"></ion-icon>
            </div>
        )
    }
    if (props.cor === "laranja") {
        return (
            <div className="perguntas">
                <p className="respondido orange">{props.flashcard}</p>
                <ion-icon class = "icone orange" name="help-circle"></ion-icon>
            </div>
        )
    }
    if (props.cor === "verde") {
        return (
            <div className="perguntas">
                <p className="respondido green">{props.flashcard}</p>
                <ion-icon class = "icone green" name="checkmark-circle"></ion-icon>
            </div>
        )
    }
}


export default PerguntaFinalizada;
