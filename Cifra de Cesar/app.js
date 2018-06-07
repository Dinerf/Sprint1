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
  console.log(encryptedMsg);
  for(i = 0; i < encryptedMsg.length; i++) {
    var cipheredCharacter = encryptedMsg.charCodeAt(i);
    console.log(cipheredCharacter);
    if(cipheredCharacter < 91) {
      console.log(key);
      var decipheredCharacter = (cipheredCharacter + 65 - key) % 26 + 65;
      console.log(decipheredCharacter);
      decipheredCharacter = String.fromCharCode(decipheredCharacter);
      console.log(decipheredCharacter);
      decipheredMsg += decipheredCharacter;
    } else {
      console.log(key);
      console.log(cipheredCharacter);
      var decipheredCharacter = (cipheredCharacter + 7 - key) % 26 + 97;
      console.log(decipheredCharacter);
      decipheredCharacter = String.fromCharCode(decipheredCharacter);
      console.log(decipheredCharacter);
      decipheredMsg += decipheredCharacter;
    }
  }
  document.getElementById("reverse").innerHTML = decipheredMsg;
}
