let arr= [7,3,9,4,2,0,5];
function selection(arr,i){
    if(i===arr.length) return arr;
    let small =arr[i];
    for(let j=i;j<arr.length;j++){
        
        if(small>arr[j]){
            let temp = small;
            small = arr[j];
            arr[j]=temp;
            arr[i]=small;
        }
    }
  return selection(arr,i+1)
}

console.log(selection(arr,i=0));