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
var key = 3469;
function cipher() {
  for(i = 0; i < regularMsg.length; i++) {
    var character = regularMsg.charCodeAt(i);
// Verifica se o caractere é maiusculo e aplica fórmula correspondente
    if(character < 91) {
      var encryptedCharacter = (character - 65 + key) % 26 + 65;
      encryptedCharacter = String.fromCharCode(encryptedCharacter);
      encryptedMsg += encryptedCharacter;
// Aplica fórmula para caractere minusculo
    } else {
      var encryptedCharacter = (character - 97 + key) % 26 + 97;
      encryptedCharacter = String.fromCharCode(encryptedCharacter);
      encryptedMsg += encryptedCharacter;
    }
  }
//Imprime resultado na tela
  document.getElementById("msg").innerHTML = encryptedMsg;
}

var decipheredMsg = "";
function decipher() {
  for(i = 0; i < encryptedMsg.length; i++) {
    var cipheredCharacter = encryptedMsg.charCodeAt(i);
// Verifica se o caractere é maiusculo e aplica fórmula correspondente
    if(cipheredCharacter < 91) {
      var decipheredCharacter = ((cipheredCharacter - 64 - key)*(-1)) % 26 + 65;
      decipheredCharacter = String.fromCharCode(decipheredCharacter);
      decipheredMsg += decipheredCharacter;
// Aplica fórmula para caractere minusculo
    } else {
      var decipheredCharacter = ((cipheredCharacter - 96 - key)*(-1)) % 26 + 97;
      decipheredCharacter = String.fromCharCode(decipheredCharacter);
      decipheredMsg += decipheredCharacter;
    }
  }
  decipheredMsg = decipheredMsg.split('').reverse().join('');
//Imprime resultado na tela
  document.getElementById("reverse").innerHTML = decipheredMsg;
}
