function isPrime(n) {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
//Best case : number = 1 OR number = 2 => O(1)
//Average case : O(n) (Improved: O(sqrt(n)))
//Worst case : big prime number like number = 27,277 => O(n) (Improved: O(sqrt(n)))
