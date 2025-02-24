function fib(n) {
  let result;
  if (memo[n]) return memo[n];

  if (n === 0 || n === 1) result = 1;
  else result = fib(n - 1) + fib(n - 2);

  memo[n] = result;
  return result;
}
