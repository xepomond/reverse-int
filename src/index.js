module.exports = function reverse (n) {
   let result = '';
   if (n < 0){
      n = n + '';
      result = (n.split('').reverse().join(''));
      let lastSymbol = result[result.length - 1];
      return ( result.split(lastSymbol).join(''));
      }
   else {
      n = n + ""; 
      return (n.split('').reverse().join(''));
   }
}