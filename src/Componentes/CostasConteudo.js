import RenderizarCostas from "./RenderizarCostas";

function CostasConteudo(props) {

    let opcoesRespostas = [
        {classe: "resposta vermelho", opção: "Não lembrei", cor:"vermelho"},
        {classe: "resposta laranja", opção: "Quase não lembrei", cor:"laranja"},
        {classe: "resposta verde", opção: "ZAP!", cor:"verde"}
    ]

    return (
        <div class="flashcard costas">
            <p>{props.resposta}
            </p>
            <div class="respostas">
                {opcoesRespostas.map(resposta =>
                    <RenderizarCostas classe={resposta.classe} opção={resposta.opção} 
                    cor={resposta.cor} setFinalizado={props.setFinalizado} 
                    setCor={props.setCor} contador={props.contador} 
                    setContador={props.setContador} setIcone={props.setIcone}
                    array = {props.array} setArray = {props.setArray} setParabens = {props.setParabens}/>)}
            </div>
        </div>
    )
}

export default CostasConteudo;