function findSmallest(arr) {
  let smallest = arr[0]; // 1
  for (let i = 1; i < arr.length; i++) {
    // 1
    if (arr[i] < smallest) {
      // n
      smallest = arr[i]; // 0 (Best case), 2 (worst case), 1 (average case)
    }
  }
  return smallest; // 1
}
//Best case: [1,2,3] => O(n)
//Worst case: [3,2,1] => O(n)
//Average case: [2,1,3] => O(n)

function isEven(n) {
  return n % 2 === 0; // One case => O(1)
}
