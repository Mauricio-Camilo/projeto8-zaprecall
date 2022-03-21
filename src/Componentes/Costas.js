import React, { useState } from "react";
import CostasConteudo from "./CostasConteudo";
import PerguntaFinalizada from "./PerguntaFinalizada";

function Costas(props) {
    const [finalizado, setFinalizado] = React.useState(false);
    const [cor, setCor] = React.useState("");

    return (
        <>
            {finalizado ?

                <PerguntaFinalizada cor={cor} flashcard={props.flashcard} /> :

                <CostasConteudo resposta={props.resposta} setCor={setCor}
                    setFinalizado={setFinalizado} contador={props.contador}
                    setContador={props.setContador} setIcone={props.setIcone}
                    array={props.array} setArray={props.setArray} setParabens={props.setParabens} />
            }
        </>
    )
}

export default Costas;

