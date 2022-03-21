function RenderizarIcones(props) {
    return (
        <>
            <p>{props.contagem}/{props.comprimento} CONCLUIDOS</p>
            <div className="concluidos-icones">
                {props.array.map(icone => {
                    if (icone === "Não lembrei") {
                        return (
                            <ion-icon class="icone red" name="close-circle"></ion-icon>
                        )
                    }
                    if (icone === "Quase não lembrei") {
                        return (
                            <ion-icon class="icone orange" name="help-circle"></ion-icon>
                        )
                    }
                    if (icone === "ZAP!") {
                        return (
                            <ion-icon class="icone green" name="checkmark-circle"></ion-icon>
                        )
                    }
                }
                )}
            </div>
        </>
    )

}

export default RenderizarIcones;