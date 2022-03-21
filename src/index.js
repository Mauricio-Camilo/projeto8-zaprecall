import ReactDOM from 'react-dom';
import App from "./Componentes/App"

const elemento = document.querySelector(".root");
ReactDOM.render(<App />, elemento);

/*  NOTAS DO LIVE CODING 

- Colocar pŕimeiro imports de bibliotecas, depois de compenentes, e por último de imagens

- Importar os arquivos css e fazer dentro do src. Podem ser criados vários arquivos de css.

- Criar diversas pastas e subpastas respeitando a hierarquia dos componentes.

- Esqeuci de usar o key nos maps.

- Talvez seria mais fácil usar a lógica do visível para ocultar a página inicial, ao invés de usar a lógica
das classes.

- É possível criar o array em um arquivo separado, dar import e depois chamar ele no map do componente.

- A lista dos flashcards antes de serem clicados, devem estar sempre em ordem, é apenas os flashcards que 
deveriam renderizar, e não renderizar tudo. Os flashcards deveriam ser um estado de arrays. Usar o indice do
array de flashcards para montar o numero da pergunta.

- com apenas um estado, que pode ser chamado por números, é possível criar um if para renderizar a parte qwue eu 
quero do flashcard (similar ao que eu fiz no estado dos icones). Desse modo, com apenas um componente flashcard, ele
tem os 4 estados que são necessários para mostrar ao usuário.

- Verificar como criar o objeto de icones/imagens fazendo com props, para depois chamar com as tags 
(fazer um resumo disso).

- Guardar duas informações em um único estado usando objetos em useState.

- Colocar o icone e o parágrafo dentro do span para não precisar criar um flexbox.


*/