function findElement(sortedArr, el, offset) {
  //O(1) for non recursive step
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((endIndex - startIndex) / 2);

    if (el === sortedArr[middleIndex]) return middleIndex + offset;

    if (sortedArr[middleIndex] < el) {
      startIndex = middleIndex + 1;
      offset = offset + middleIndex + 1;
    } else {
      endIndex = middleIndex;
    }
    //O(1) for recursive step
    return findElement(sortedArr.slice(startIndex, endIndex + 1), el, offset);
  }
}
//Runtime of recursion master theorem formula : O(n ^ logb a)
//a = 1 in our case (a means the no of times we call ourself in the main function)
//b = 2 in our case (b means -> how we are spliting the array that half or 1/3rd or 1/4th)
//O(n ^ logb a) => O(n ^ log2 1) => O(n ^ 0) => O(1) for our recursive step
//If same work inside and outside recursion O(n ^ logb a * logn) => O(1 * logn) => O(logn)
//If non recursive part does more work then TC is O(fn(n))
