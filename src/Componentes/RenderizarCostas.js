function RenderizarCostas(props) {
    return (
        <>
            <div onClick={() => FinalizaCard(props.setFinalizado,props.setCor,props.cor,props.contador,props.setContador)} 
            className = {props.classe}>
                <span> {props.opção} </span>   
             </div>
        </>
    )
}

function FinalizaCard (setFinalizado,setCor,cor,contador,setContador) {
    setFinalizado(true);
    setCor(cor);
    setContador(contador+1);
}


export default RenderizarCostas;