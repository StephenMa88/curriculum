/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */


const solution = (a, b) => {
  var i = 0;
  while (i<a){
    b();
    i++
  };
  return i;
};

module.exports = {
  solution,
};
