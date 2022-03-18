import React, { useState } from "react";
import Cabeçalho from "./Cabeçalho";
import RenderizarPerguntas from "./RenderizarPerguntas";
import Concluidos from "./Concluidos";

function PaginaPerguntas() {

    const ListaPerguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4","Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"];
    let contador = 0;
    ListaPerguntas.sort(Comparador);
    const [tela, setTela] = React.useState (true);

    return (
        <div className="tela-principal">
            <div className="tela-2">
                <Cabeçalho />
                <div className="container">
                    {ListaPerguntas.map(lista => <RenderizarPerguntas pergunta={lista} callback={() => setTela(tela)}/>
                    )}
                </div>
                <Concluidos contagem={contador} comprimento={ListaPerguntas.length}/>
            </div>
        </div>
    )
}

function Comparador () {
    return Math.random() - 0.5;
}

export default PaginaPerguntas;