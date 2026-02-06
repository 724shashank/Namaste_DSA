let arr = [5,2,4,1];
let k=arr.length-1;

function bubblesort(arr){
if(k<=0) return arr;
   for(let i=0;i<=k;i++){
    if(arr[i]>arr[i+1]){
        let j = arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=j;
    }
    }
    k--;
return bubblesort(arr)
}

console.log(bubblesort(arr))
