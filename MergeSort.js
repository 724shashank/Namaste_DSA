let arr = [8,4,5,6,9,1,3,6,0];
function merge(arr){
   if(arr.length<=1) return arr;
    let len = Math.floor(arr.length/2);
    let a = merge(arr.slice(0,len));
    let b = merge(arr.slice(len,arr.length));
    
    function mergeSortedArray(a,b){
    let c = [];
    let itr = b.length + a.length;
    let p1=0;
    let p2=0;
    for(let i=0;i<itr;i++){
        if(p1===a.length){
            c[i]=b[p2];
            p2++;
        }else if(p2===b.length){
            c[i]=a[p1];
            p1++;
        }else if(a[p1]<b[p2]){
            c[i]=a[p1];
            p1++;
        }else{
            c[i]=b[p2];
            p2++;
        }
    }
    return c
    }
    
return mergeSortedArray(a,b);
}

console.log(merge(arr))