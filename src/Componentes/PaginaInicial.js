import React, { useState } from "react";
import logo from "../ZapRecall-Recursos/logo.png"

function PaginaInicial() {

    const [visivel, setVisivel] = React.useState(true); 
    const css = `tela-principal ${visivel ? "mostrar" : "escondido"}` 
    return (
        <div className={css}>
            <div className="pagina-inicial">
                <img src={logo}/>
                <p className="pagina-inicial-texto"> ZapRecall </p>
                <button onClick={() => setVisivel(!visivel)} className="pagina-inicial-botao">
                    <p className="botao-texto">Iniciar Recall!</p>
                </button>
            </div>
        </div>
    )
}

export default PaginaInicial;