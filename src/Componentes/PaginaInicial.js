import React, { useState } from "react";

function PaginaInicial() {
    const [visivel, setVisivel] = React.useState(true); // Estado criado, inicialmente é true para: a tela está visivel?
    // No onClick, ele vai reverter o estado da tela para false, ou seja, ela é visivel? não
    const css = `tela-principal ${visivel ? "mostrar" : "escondido"}` // Uso do ternário
    // o css vai dar uma característica para o estado true e uma característica para o estado false.
    return (
        <div className={css}>
            <div className="pagina-inicial">
                <img src="./ZapRecall-Recursos/logo.png" />
                <p className="pagina-inicial-texto"> ZapRecall </p>
                <button onClick={() => setVisivel(!visivel)} className="pagina-inicial-botao">
                    <p className="botao-texto">Iniciar Recall!</p>
                </button>
            </div>
        </div>
    )
}

export default PaginaInicial;