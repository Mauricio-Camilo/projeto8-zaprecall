function RenderizarCostas(props) {
    return (
        <>
            <div onClick={() =>
                FinalizaCard(props.setFinalizado, props.setCor, props.cor,
                    props.contador, props.setContador, props.setIcone, props.opção,
                    props.array, props.setArray, props.setParabens)}

                className={props.classe}>
                <span> {props.opção} </span>
            </div>
        </>
    )
}

function FinalizaCard(setFinalizado, setCor, cor, contador, setContador,
    setIcone, opção, array, setArray, setParabens) {
    setFinalizado(true);
    setCor(cor);
    setContador(contador + 1);
    setIcone(opção);
    setArray([...array, opção]);
    if (opção === "Não lembrei") {
        setParabens(false);
    }
}

export default RenderizarCostas;