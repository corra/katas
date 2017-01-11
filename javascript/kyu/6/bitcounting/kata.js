/**
 * Count the set (1) bits in a unsigned integer and return the bit count
 *
 * Note: JavaScript numbers are 64-bit double precision but opperands to bitwise opperators
 *     are internally converted to signed 32-bit integers in two's compliment format.
 *
 * @param {number} num
 * @return {number}
 */

const countBits = function(num) {
  let bitCount = 0;

  // bitCount = BitCounter.bitwiseCount(num);
  bitCount = BitCounter.mathCount(num);
  
  return bitCount;
}


/**
 * Container for bit counting implemintations.
 * 
 *    JavaScript implements [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point)
 *    64-bit double-precison numbers; thus, unsigned integers do not truly exist.
 */
class BitCounter {
  
  /**
   * Count set (1) bits in a unsigned integer via bit manipulation and return {bitCount}.
   *    Operands to bitwise opperators are converted internally to 32-bit
   *    signed two's compilment integers; thus, limiting possible return values to [0, 32].
   *
   * @param {number} num
   * @return {number}
   */
  static bitwiseCount(num) {
    let bitCount = 0;

    if (Number.isSafeInteger(num) && num != 0) {
      do {
        bitCount += num & 0x1;
        num >>>= 1; // zero-fill right shift emulates unsigned integers
      } while (num > 0);
    }
    return bitCount;
  }

  /**
   * Count set (1) bits in a integer via mathematical approach and return {bitCount}.
   *    Using {Math} methods the range of integers can be expanded to (2^53 - 1) and
   *    returns values to [0, 53]. Again, JavaScript does not have unsigned integers,
   *    integers are represented within 53 bits of a signed double-precision decimal.
   *
   *    Note: This implementation is likely not the intent/expectation of the Sensei
   *    and should probably be considered a illustrative secondary thought experiment.
   *
   * @param {number} num
   * @return {number}
   */
  static mathCount(num) {
    let bitCount = 0;
    
    /*
     * .isSafeInteger is required, .isInteger causes unexpected results because
     *    Math.pow(2, 53) == Math.pow(2, 53) + 1
     *    For a detailed explination of _How numbers are encoded in JavaScript_ 
     *    see: http://www.2ality.com/2012/04/number-encoding.html
     */
    if (Number.isSafeInteger(num)) {
      do {
        if ((num % 2) > 0) {
          bitCount++;
        }
        
        num = Math.trunc(num / 2);
      } while (num > 0);
    }
    
    return bitCount;
  }
}  
