function RenderizarCostas(props) {
    return (
        <>
            <div onClick={() => FinalizaCard(props.setFinalizado,props.setCor,props.cor)} className = {props.classe}>
                <span> {props.opção} </span>   
             </div>
        </>
    )
}

function FinalizaCard (setFinalizado,setCor,cor) {
    console.log("Entrou na função");
    setFinalizado(true);
    setCor(cor);
}
export default RenderizarCostas;