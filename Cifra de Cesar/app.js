do {
  var regularMsg = prompt("Que mensagem deseja criptografar?");
  if(regularMsg != null) {
    for(i = 0; i < regularMsg.length; i++){
      if(regularMsg.charCodeAt(i) < 65 || regularMsg.charCodeAt(i) > 122 || (regularMsg.charCodeAt(i) > 90 && regularMsg.charCodeAt(i)< 97)) {
        alert("Preencha somente letras maiusculas!");
        regularMsg = "";
        break;
      }
    }
  }
} while (regularMsg === "" || regularMsg === null);

var encryptedMsg = "";
function cipher() {
  for(i = 0; i < regularMsg.length; i++) {
    var character = regularMsg.charCodeAt(i);
    if(character < 91) {
      var encryptedCharacter = (character - 65 + 33) % 26 + 65;
      encryptedCharacter = String.fromCharCode(encryptedCharacter);
      encryptedMsg += encryptedCharacter;
    }
    if(character > 96) {
      var encryptedCharacter = (character - 97 + 33) % 26 + 97;
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
    var decipheredCharacter = cipheredCharacter - 7;
    decipheredCharacter = String.fromCharCode(decipheredCharacter);
    decipheredMsg += decipheredCharacter;
  }
  document.getElementById("reverse").innerHTML = decipheredMsg;
}
