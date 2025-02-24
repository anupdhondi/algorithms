let counter = 0;
function fib(n) {
  counter++;
  if (n === 0 || n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
// For every function execution we start 2 new function executions thats why it has exponential time complexity O(2^n)

//How to analyze it has exponential time complexity
fib(5);
console.log(counter);
counter = 0;
fib(10);
console.log(counter);
counter = 0;
fib(20);
console.log(counter);
counter = 0;
fib(30);
console.log(counter);
counter = 0;
