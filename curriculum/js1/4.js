/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b) => {
  var word = ""
  var i = 0;
  while (i<a){
    word = word + b;
    i++;
  };
  return word;
};

module.exports = {
  solution,
};
