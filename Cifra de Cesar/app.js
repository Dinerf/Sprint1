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
var encryptedMsg = "";
var key = parseInt(prompt("Insira a chave de criptografia"));
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
    if(cipheredCharacter <= 90) {
      var decipheredCharacter = (cipheredCharacter + 65 - key) % 26 + 65;;
      decipheredCharacter = String.fromCharCode(decipheredCharacter);
      decipheredMsg += decipheredCharacter;
    } else {
      var decipheredCharacter = (cipheredCharacter +  97 - key) % 26 + 97;
      decipheredCharacter = String.fromCharCode(decipheredCharacter);
      decipheredMsg += decipheredCharacter;
    }
  }
  document.getElementById("reverse").innerHTML = decipheredMsg;
}
