//Write a Program to Find the largest and second Largest in the Array

const arr = [990, -2, -3, -1, 0, 990, 990];
function findLargest_SecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (largest < arr[i]) {
      secondLargest = largest;
      largest = arr[i];
    } else if (secondLargest < arr[i] && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  console.log(largest);
  console.log(secondLargest);
}

findLargest_SecondLargest(arr);
