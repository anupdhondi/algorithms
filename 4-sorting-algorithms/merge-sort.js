function sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);
  const leftSortedArray = sort(leftArray);
  const rightSortedArray = sort(rightArray);

  const mergedArray = [];
  let rightIndex = 0;
  let leftIndex = 0;
  while (
    rightIndex < rightSortedArray.length ||
    leftIndex < leftSortedArray.length
  ) {
    if (
      leftIndex >= leftSortedArray.length ||
      leftSortedArray[leftIndex] > rightSortedArray[rightIndex]
    ) {
      mergedArray.push(rightSortedArray[rightIndex]);
      rightIndex++;
    } else {
      mergedArray.push(leftSortedArray[leftIndex]);
      leftIndex++;
    }
  }
  return mergedArray;
}
//Recursive step runtime : O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
//Runtime outside recursion : O(n)
//Same runtime inside and outside recursion : O(n^logb(a) * logn) => O(n * logn)

console.log(sort([-10, 33, 5, 10, 9, 3, -19, -99, 100]));
