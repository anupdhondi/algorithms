function isPowerOfTwo(n) {
  let dividedNumber = n;
  while (dividedNumber !== 1) {
    console.log("Executing...");
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber = dividedNumber / 2;
  }
  return true;
}
//Best case : n = 13 => O(1)
//Average case: O(log n)
//Worst case: n = 1125899906842624 => O(log n) number is big but executions are 50.That is executions not growing even close to the number then it logarithmic time complexity

function isPowerOfTwoBitwise(n) {
  return (n & (n - 1)) === 0; // O(1)
}
