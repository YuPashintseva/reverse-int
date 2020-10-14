module.exports = function reverse (n) {

  let reversed = n.toString().split('').reverse();//.join('');
  if (reversed[reversed.length-1] === "-"){
    reversed.pop();
  }
  return reversed.join('');
}
