import RenderizarIcones from "./RenderizarIcones";

function ConcluidosIcones(props) {

    if (props.contagem === props.comprimento) {
        if (props.parabens === true) {
            return (
                <>
                    <footer className="concluidos-finalizado">
                        <div className="finalizado">
                            <div className="finalizado-container">
                                <img className="finalizado-figura" src="./ZapRecall-Recursos/party.png" />
                                <p className="finalizado-mensagem">Parabéns!</p>
                            </div>
                            <span>Você não esqueceu de nenhum flashcard!</span>
                        </div>
                        <RenderizarIcones contagem={props.contagem} comprimento={props.comprimento}
                            array={props.array} />
                    </footer>
                </>
            )
        }
        else {
            return (
                <>
                    <footer className="concluidos-finalizado">
                        <div className="finalizado">
                            <div className="finalizado-container">
                                <img className="finalizado-figura" src="./ZapRecall-Recursos/sad.png" />
                                <p className="finalizado-mensagem">Putz...</p>
                            </div>
                            <span>Ainda faltam alguns... Mas não desanime!</span>
                        </div>
                        <RenderizarIcones contagem={props.contagem} comprimento={props.comprimento}
                            array={props.array} />
                    </footer>
                </>
            )
        }
    }
    else {
        return (
            <footer className="concluidos">
                <RenderizarIcones contagem={props.contagem} comprimento={props.comprimento}
                    array={props.array} />
            </footer>

        )
    }
}

export default ConcluidosIcones;