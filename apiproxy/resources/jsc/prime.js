var num = context.getVariable("math.number");
var primes = sumPrimes(parseInt(num));

var mock = {
    input: num,
    result: primes
}

context.proxyResponse.content = JSON.stringify(mock);

function sumPrimes(num) {
  var prime = [];
  //This loop references the function 'isPrime'.
  //It passes the 'i' arg to 'isPrime' (which is 2 first time). 
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  //Function takes 2 (i) and checks it. If it passes the for loop (j = 2; if j < num(2)), it doesn't
  //pass this, so it returns false. Then j = 3??? No, J stays at 2 and i(num) becomes 3. Then it continues to fail..? COnfused because the code works. Thought I understood it.
  function isPrime(num) {
    for (var j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }
  return prime;
}