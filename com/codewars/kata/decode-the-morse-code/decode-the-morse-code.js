decodeMorse = function(morseCode){
  let message = morseCode.split(/\s/).reduce( (myMessage, code, currentIndex, array) => {
      return myMessage + ((typeof MORSE_CODE[code] === 'undefined') ? ' ' : MORSE_CODE[code]);
    }, "");
    
  return message.trim().replace(/\s+/g, ' ');
}
