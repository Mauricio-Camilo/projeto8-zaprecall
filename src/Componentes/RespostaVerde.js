function RespostaVerde(props) {
    return (
      <div class="perguntas">
        <p class="respondido">{props.flashcard}</p>
        <ion-icon class="icone-verde" name="checkmark-circle"></ion-icon>
    </div>
    )
  }
  
  export default RespostaVerde;