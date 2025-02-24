function findElement(sortedArr, el) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (el === sortedArr[middleIndex]) return middleIndex;

    if (sortedArr[middleIndex] < el) startIndex = middleIndex + 1;
    else endIndex = middleIndex - 1;
  }
}

const arr = [1, 5, 9, 13, 99, 100];
console.log(findElement(arr, 99));

// Best case → O(1) if element we are finding is in middle
// Avg case → tends to be O(logn) bcoz we dont know its position in advance
// Worst case → O(logn) if element we are finding is first/last element
// (logarithmic bcoz here we are splitting array in half in every iteration)
