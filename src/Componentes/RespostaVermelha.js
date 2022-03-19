function RespostaVermelha(props) {
  return (
    <div class="perguntas">
      <p class="respondido">{props.flashcard}</p>
      <ion-icon class="icone-vermelho" name="close-circle"></ion-icon>
    </div>
  )
}

export default RespostaVermelha;