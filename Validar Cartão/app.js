do {
  var cardNumber = prompt("Qual o número do cartão?");
  if(cardNumber != null) {
    for(i = 0; i < cardNumber.length; i++){
      if(cardNumber.charCodeAt(i) < 48 || cardNumber.charCodeAt(i) > 57) {
        alert("Preencha somente números!");
        cardNumber = "";
        break;
      }
    }
  }
} while (cardNumber === "" || cardNumber === null);
function isValidCard() {
  cardNumber = cardNumber.split('').reverse().join('');
  var validate = [];
  for(i = 1; i < cardNumber.length; i += 2){
    validate[i] = cardNumber[i] *= 2;
    if(validate[i] > 9) {
      var aux = validate[i];
      aux = aux.toString();
      aux = aux.split('');
      aux = parseInt(aux[0]) + parseInt(aux[1]);
      validate[i] = aux;
    }
  }
  for(i = 0; i < cardNumber.length; i += 2){
    validate[i] = parseInt(cardNumber[i]);
  }
  var sum = 0;
  for(i = 0; i < validate.length; i++) {
    sum += validate[i];
  }
  if(sum % 10 === 0) {
    document.getElementById("validate").innerHTML = "Cartão Válido";
  } else {
    document.getElementById("validate").innerHTML = "Cartão Inválido";
  }
}
