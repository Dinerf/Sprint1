// Ao tentar cancelar ou submeter vazio, o prompt continuará aparecendo
do {
  var regularMsg = prompt("Que mensagem deseja criptografar?");
  if(regularMsg != null) {
// Ao tentar inserir caractere diferente de letra, aparecerá o alert e o prompt novamente
    for(i = 0; i < regularMsg.length; i++){
      if(regularMsg.charCodeAt(i) < 65 || regularMsg.charCodeAt(i) > 122 || (regularMsg.charCodeAt(i) > 90 && regularMsg.charCodeAt(i)< 97)) {
        alert("Preencha somente letras!");
        regularMsg = "";
        break;
      }
    }
  }
} while (regularMsg === "" || regularMsg === null);

var encryptedMsg = "";
function cipher() {
  var n = 33;
  for(i = 0; i < regularMsg.length; i++) {
    var character = regularMsg.charCodeAt(i);
// Verifica se o caractere é maiusculo e aplica fórmula correspondente
    if(character < 91) {
      var encryptedCharacter = (character - 65 + 33) % 26 + 65;
      encryptedCharacter = String.fromCharCode(encryptedCharacter);
      encryptedMsg += encryptedCharacter;
// Aplica fórmula para caractere minusculo
    } else {
      var encryptedCharacter = (character - 97 + n) % 26 + 97;
      encryptedCharacter = String.fromCharCode(encryptedCharacter);
      encryptedMsg += encryptedCharacter;
    }
  }
//Imprime resultado na tela
  document.getElementById("msg").innerHTML = encryptedMsg;
}

var decipheredMsg = "";
function decipher() {
// Verifica cada caractere e aplica fórmula para decifrar o código
  for(i = 0; i < encryptedMsg.length; i++) {
    var cipheredCharacter = encryptedMsg.charCodeAt(i);
        var decipheredCharacter = cipheredCharacter - 7;
    decipheredCharacter = String.fromCharCode(decipheredCharacter);
    decipheredMsg += decipheredCharacter;
  }
//Imprime resultado na tela
  document.getElementById("reverse").innerHTML = decipheredMsg;
}
