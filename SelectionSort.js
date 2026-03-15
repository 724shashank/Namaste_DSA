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


//More optimized version (Final changes in one go)

let arr1= [7,3,9,4,2,0,5];
function selection(arr1,i){
    if(i===arr1.length) return arr1;
    let small =i //min index;
    for(let j=i;j<arr1.length;j++){
        
        if(arr1[small]>arr1[j]){
            small=j
        }
    }
    [arr1[i],arr1[small]]=[arr1[small],arr1[i]]
  return selection(arr1,i+1)
}

console.log(selection(arr1,i=0));