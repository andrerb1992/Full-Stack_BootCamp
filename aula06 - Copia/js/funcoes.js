function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

function compareNumbers(a, b) {
  // return a > b ? 1 : a < b ? -1 : 0;
  return a - b;
}
console.log(compareNumbers(1, 1));
console.log(compareNumbers(1, 2));
console.log(compareNumbers(2, 1));

function superSum(from, upTo) {
  var sum = 0;

  for (var i = 0; i <= upTo; i++) {
    sum += i;
  }
  return sum;
}
console.log(superSum(1, 10));
console.log(superSum(200, 1000));
