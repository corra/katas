/**
 * Morse Code class
 *
 */
class MorseCode {
  constructor(inputString = '') {
    this.message = inputString.trim();
  }
  
  encode(message) {
  
  }
  
  /**
   * Decode dot-dash encoded morse code messages and return the decoded message
   *
   * @param {string} encodedMessage Dot-Dash encoded morse code
   * @return {string} 
   */
  decodeDotDash(encodedMessage) {
    let message = encodedMessage.split(/\s/).reduce( (myMessage, code, currentIndex, array) => {
      return myMessage + ((typeof MorseCode.MORSE_CODE[code] === 'undefined') ? ' ' : MorseCode.MORSE_CODE[code]);
    }, "");
    
    this.message = message.trim().replace(/\s+/g, ' ');
    
    return this.message;
  }
}

Object.defineProperty(MorseCode, 'MORSE_CODE', {
        enumerable: true,
        configurable: false,
        writable: false,
        value: { 
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
          '...---...': 'SOS',
        },
      }
    ); // Provide morse code table

decodeMorse = function(morseCode) {
  let m = new MorseCode(morseCode);
  
  return m.decodeDotDash(morseCode);
}

  
