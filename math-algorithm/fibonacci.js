function fib(n) {
  const numbers = [0, 1]; // 1
  for (i = 2; i <= n; i++) {
    // 1
    numbers.push(numbers[i - 2] + numbers[i - 1]); // n-1
  }
  console.log(numbers);
  return numbers[n]; // 1
}
// T = 1 + 1 + 1 + n - 1 = 2 + n = n
// O(n) linear time complexity
console.log(fib(6));
