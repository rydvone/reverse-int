module.exports = function reverse (n) {
  let a = '';
  n = Math.abs(n);
    function rev(n) {
      if (n >= 1) {
        a += (n % 10);
        rev(Math.floor(n / 10));
      }
      return a;
    }    
  return n = +(rev(n));  
}
