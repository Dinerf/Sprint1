// Ao tentar cancelar ou submeter vazio, o prompt continuará aparecendo
do {
  var cardNumber = prompt("Qual o número do cartão?");
  if(cardNumber != null) {
// Ao tentar inserir caractere diferente de número, aparecerá o alert e o prompt novamente
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
// Inverte a ordem dos números inseridos
  cardNumber = cardNumber.split('').reverse().join('');
  var validate = [];
// Cria nova array com os valores das casas pares multiplicados por 2 e casas ímpares vazias
  for(i = 1; i < cardNumber.length; i += 2){
    validate[i] = cardNumber[i] *= 2;
// Caso o valor da casa par seja maior que 9, soma-se os dígitos
    if(validate[i] > 9) {
      var aux = validate[i];
      aux = aux.toString();
      aux = aux.split('');
      aux = parseInt(aux[0]) + parseInt(aux[1]);
      validate[i] = aux;
    }
  }
// Copia os valores das casas ímpares para a nova array
  for(i = 0; i < cardNumber.length; i += 2){
    validate[i] = parseInt(cardNumber[i]);
  }
// Soma todos os valores
  var sum = 0;
  for(i = 0; i < validate.length; i++) {
    sum += validate[i];
  }
// Caso a divisão da soma por 10 seja exata, aparece a mensagem aprovando
  if(sum % 10 === 0) {
    document.getElementById("validate").innerHTML = "Cartão Válido";
  } else {
// Caso contrário, mensagem desaprovando
    document.getElementById("validate").innerHTML = "Cartão Inválido";
  }
}
