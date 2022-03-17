import React, { useState } from "react";

function PaginaInicial () {
const [visivel, setVisivel] = React.useState("tela-principal mostrar");

    return (
        <div class={visivel}>
            <div className="pagina-inicial">
            <img src="./ZapRecall-Recursos/logo.png"/>
            <p className="pagina-inicial-texto"> ZapRecall </p>
            <button onClick={()=> setVisivel("tela-principal escondido")} className="pagina-inicial-botao">
            <p className="botao-texto">Iniciar Recall!</p>
            </button>
            </div>
        </div>
    )
}

export default PaginaInicial;