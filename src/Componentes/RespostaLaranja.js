function RespostaLaranja(props) {
    return (
      <div class="perguntas">
        <p class="respondido">{props.flashcard}</p>
        <ion-icon class="icone-laranja" name="help-circle"></ion-icon>       
    </div>
    )
  }
  
  export default RespostaLaranja;