function sort(arr) {
  const copiedArr = [...arr];
  for (let outer = 0; outer < copiedArr.length; outer++) {
    let outerEl = copiedArr[outer];
    for (let inner = outer + 1; inner < copiedArr.length; inner++) {
      let innerEl = copiedArr[inner];

      if (outerEl > innerEl) {
        copiedArr[outer] = innerEl;
        copiedArr[inner] = outerEl;

        outerEl = copiedArr[outer];
        innerEl = copiedArr[inner];
      }
    }
  }

  return copiedArr;
}
//Best case : O(n) => items are already sorted
//Average case : O(n^2) => random order
//Worst case : O(n^2) => items are sorted in reverse order

console.log(sort([10, 5, -1, -3, 3, 100, 99]));
