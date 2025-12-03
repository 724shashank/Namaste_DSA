//Write a program to sort the array

let arr = [8, -2, 10, 3, 1, 4, 9, 0];

let temp;

for (let i = 0; i <= arr.length - 1; i++) {
  for (let j = i + 1; j <= arr.length - 1; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i]; //Swaping using third varibale "temp"
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
 
//or

let arr1 = [8, -2, 10, 3, 1, 4, 9, 0];

for (let k = 0; k <= arr1.length - 1; k++) {
  for (let l = k + 1; l <= arr1.length - 1; l++) {
    if (arr1[k] > arr1[l]) {
      arr1[k] = arr1[k] + arr1[l]; //Swaping without using Third variable
      arr1[l] = arr1[k] - arr1[l];
      arr1[k] = arr1[k] - arr1[l];
    }
  }
}
console.log(arr1);


//Using destructring 

let a =2;
let b =3;

[a,b]=[b,a]

console.log(a,b);
