var num = context.getVariable("math.number");
var fact = factorial(parseInt(num));

var mock = {
    input: num,
    result: fact
}

context.proxyResponse.content = JSON.stringify(mock);

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}