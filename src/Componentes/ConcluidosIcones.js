function ConcluidosIcones(props) {
    return (
            <footer className="concluidos">
                <p>{props.contagem}/{props.comprimento} CONCLUIDOS</p>
                <div className="concluidos-icones">
                    {props.array.map(icone => {
                        if (icone === "Não lembrei") {
                            return (
                                <ion-icon class="icone-vermelho" name="close-circle"></ion-icon>
                            )
                        }
                        if (icone === "Quase não lembrei") {
                            return (
                                <ion-icon class="icone-laranja" name="help-circle"></ion-icon>
                            )
                        }
                        if (icone === "ZAP!") {
                            return (
                                <ion-icon class="icone-verde" name="checkmark-circle"></ion-icon>
                            )
                        }
                    }
                      )}
                </div>
            </footer>
    )
}

export default ConcluidosIcones;