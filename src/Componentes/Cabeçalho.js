import React from "react"
import logoPequeno from "../ZapRecall-Recursos/logo-pequeno.png"

function Cabeçalho() {
    return (
    <header class="cabeçalho">
        <img src={logoPequeno}/>
        <p class="tela-2-texto"> ZapRecall </p>
    </header>
    )
}

export default Cabeçalho;