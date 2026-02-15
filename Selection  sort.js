let arr = [3,1,2,1];
function selection(arr,j){
let n=arr.length-1;
if(j===n) return arr;
let min = j;

for(let i=j+1;i<=n;i++){
    if(arr[i]<arr[min]){
       min=i; //minimum index 
    }
}
if(min !==j){
 let temp = arr[j];
 arr[j]= arr[min];
 arr[min]=temp;
}
return selection(arr,j+1)
}
console.log(selection(arr,j=0));
