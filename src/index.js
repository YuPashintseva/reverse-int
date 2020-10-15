module.exports = function reverse (n) {
  let reversed = n.toString().split('').reverse();
  if (reversed[reversed.length-1] === "-"){  
    reversed.pop();
  }
  return reversed.join('');
}
