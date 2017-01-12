decodeMorse = function(morseCode){
  let message = morseCode.split(/\s/).reduce( (myMessage, code, currentIndex, array) => {
      return myMessage + ((typeof MORSE_CODE[code] === 'undefined') ? ' ' : MORSE_CODE[code]);
    }, "");
      
  return message.trim().replace(/\s+/g, ' ');
}

/**
 * Morse Code class
 *
 */
class MorseCode {

  encode(message) {
  
  }
  
  decodeDotDash(encodedMessage) {
  
  }
}


/*
  // TODO: Add MORSE_CODE with Object.defineProperty()
  // Morse Code map
   MORSE_CODE = [ 
      '-.-.--': '!',
      '.-..-.': '"',
      '...-..-': '$',
      '.-...': '&',
      '.----.': '\'',
      '-.--.': '(',
      '-.--.-': ')',
      '.-.-.': '+',
      '--..--': ',',
      '-....-': '-',
      '.-.-.-': '.',
      '-..-.': '/',
      '-----': '0',
      '.----': '1',
      '..---': '2',
      '...--': '3',
      '....-': '4',
      '.....': '5',
      '-....': '6',
      '--...': '7',
      '---..': '8',
      '----.': '9',
      '---...': ':',
      '-.-.-.': ';',
      '-...-': '=',
      '..--..': '?',
      '.--.-.': '@',
      '.-': 'A',
      '-...': 'B',
      '-.-.': 'C',
      '-..': 'D',
      '.': 'E',
      '..-.': 'F',
      '--.': 'G',
      '....': 'H',
      '..': 'I',
      '.---': 'J',
      '-.-': 'K',
      '.-..': 'L',
      '--': 'M',
      '-.': 'N',
      '---': 'O',
      '.--.': 'P',
      '--.-': 'Q',
      '.-.': 'R',
      '...': 'S',
      '-': 'T',
      '..-': 'U',
      '...-': 'V',
      '.--': 'W',
      '-..-': 'X',
      '-.--': 'Y',
      '--..': 'Z',
      '..--.-': '_',
      '...---...': 'SOS'
    ];
  */
