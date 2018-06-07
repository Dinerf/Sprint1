do {
  var regularMsg = prompt("Que mensagem deseja criptografar?");
  if(regularMsg != null) {
    for(i = 0; i < regularMsg.length; i++){
      if(regularMsg.charCodeAt(i) < 65 || regularMsg.charCodeAt(i) > 122 || (regularMsg.charCodeAt(i) > 90 && regularMsg.charCodeAt(i)< 97)) {
        alert("Preencha somente letras!");
        regularMsg = "";
        break;
      }
    }
  }
} while (regularMsg === "" || regularMsg === null);
do {
  var key = prompt("Insira a chave de criptografia com 1 ou 2 dígitos");
  if(key != null) {
    for(i = 0; i< key.length; i++) {
      if(key.charCodeAt(i) < 48 || key.charCodeAt(i) > 57 || key.length > 2) {
        alert("Preencha somente números! \n (No máximo 2 dígitos)")
        key = "";
        break;
      }
    }
  }
} while (key === "" || key === null);
key = parseInt(key);
var encryptedMsg = "";
function cipher() {
  for(i = 0; i < regularMsg.length; i++) {
    var character = regularMsg.charCodeAt(i);
    if(character < 91) {
      var encryptedCharacter = (character - 65 + key) % 26 + 65;
      encryptedCharacter = String.fromCharCode(encryptedCharacter);
      encryptedMsg += encryptedCharacter;
    } else {
      var encryptedCharacter = (character - 97 + key) % 26 + 97;
      encryptedCharacter = String.fromCharCode(encryptedCharacter);
      encryptedMsg += encryptedCharacter;
    }
  }
  document.getElementById("msg").innerHTML = encryptedMsg;
}
var decipheredMsg = "";
function decipher() {
  for(i = 0; i < encryptedMsg.length; i++) {
    var cipheredCharacter = encryptedMsg.charCodeAt(i);
    if(cipheredCharacter < 91) {
      var decipheredCharacter = (cipheredCharacter + 65 - key) % 26 + 65;
      decipheredCharacter = String.fromCharCode(decipheredCharacter);
      decipheredMsg += decipheredCharacter;
    } else {
      var decipheredCharacter = (cipheredCharacter + 7 - key) % 26 + 97;
      decipheredCharacter = String.fromCharCode(decipheredCharacter);
      decipheredMsg += decipheredCharacter;
    }
  }
  document.getElementById("reverse").innerHTML = decipheredMsg;
}
