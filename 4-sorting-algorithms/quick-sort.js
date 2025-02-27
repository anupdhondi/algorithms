function sort(arr) {
  const copiedArr = [...arr];

  if (copiedArr.length <= 1) {
    return copiedArr;
  }

  const smallerElementsArr = [];
  const biggerElementsArr = [];
  const pivotElement = copiedArr.shift();
  const centeredElementsArr = [pivotElement];

  while (copiedArr.length) {
    const currentEl = copiedArr.shift();
    if (currentEl === pivotElement) {
      centeredElementsArr.push(currentEl);
    } else if (currentEl < pivotElement) {
      smallerElementsArr.push(currentEl);
    } else {
      biggerElementsArr.push(currentEl);
    }
  }

  const smallerElementsSortedArr = sort(smallerElementsArr);
  const biggerElementsSortedArr = sort(biggerElementsArr);
  return smallerElementsSortedArr.concat(
    centeredElementsArr,
    biggerElementsSortedArr
  );
}
//Recursive step runtime : O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
//Runtime outside of the recursion : O(n)
//Same runtime inside and outside of the recursion : O(n^logb(a) * logn) => O(n * logn)

console.log(sort([3, 1, 2, 4]));
