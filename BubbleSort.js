let arr = [9,1,2,3,4,5];

function bubblesort(arr,k=arr.length-1){
if(k<=0) return arr;
let flag =0;
   for(let i=0;i<k;i++){
    if(arr[i]>arr[i+1]){
        flag++;
        let j = arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=j;
    }
    }
if(flag === 0) return arr;  
return bubblesort(arr,k=k-1)
}

console.log(bubblesort(arr))