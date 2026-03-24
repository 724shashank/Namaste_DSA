let arr = [7,3,9,1,4];
function insertion(arr){

for(let i=1;i<arr.length;i++){
    let curr =arr[i];
    let pre = i-1;
    while(curr<arr[pre]&&pre>=0){
        arr[pre+1]=arr[pre];
        pre--;
    }
    arr[pre+1]=curr;
}
return arr
}

console.log(insertion(arr));