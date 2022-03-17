import Cabeçalho from "./Cabeçalho";
import RenderizarPerguntas from "./RenderizarPerguntas";

const ListaPerguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4","Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"];
let contador = 0;

function PaginaFlashcards() {
    return (
        <div className="tela-principal">
            <div className="tela-2">
                <Cabeçalho />
                <div className="container">
                    <div class="flashcard">  
                        <p>O que é JSX?</p>
                        <img class="flashcard-flip" src="./ZapRecall-Recursos/setinha.png"/>
                    </div>
                </div>
                <footer className="concluidos">
                    <p>{contador}/{ListaPerguntas.length} CONCLUIDOS</p>
                </footer>
            </div>
        </div>
    )
}

export default PaginaFlashcards;