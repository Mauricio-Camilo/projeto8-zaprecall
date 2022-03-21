import RenderizarIcones from "./RenderizarIcones";
import React from "react"
import party from "../ZapRecall-Recursos/party.png"
import sad from "../ZapRecall-Recursos/sad.png"


function ConcluidosIcones(props) {

    if (props.contagem === props.comprimento) {
        if (props.parabens === true) {
            return (
                <>
                    <footer className="concluidos-finalizado">
                        <div className="finalizado">
                            <div className="finalizado-container">
                                <img className="finalizado-figura" src={party} />
                                <p className="finalizado-mensagem">Parabéns!</p>
                            </div>
                            <p className="mensagem-final">Você não esqueceu de nenhum flashcard!</p>
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
                                <img className="finalizado-figura" src={sad} />
                                <p className="finalizado-mensagem">Putz...</p>
                            </div>
                            <p className="mensagem-final">Ainda faltam alguns... Mas não desanime!</p>
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