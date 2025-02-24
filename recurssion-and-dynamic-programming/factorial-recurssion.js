function fact(n) {
  if (n === 1) {
    // 1
    return 1; // 1
  }
  return n * fact(n - 1); // 1
}
//In every function call O(1)
// But we trigger multiple function calls => n function calls
// T = n * O(1) => O(n)
