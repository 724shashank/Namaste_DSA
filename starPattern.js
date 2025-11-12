// Write a Program to print the star Pattern 
n=5;
for(let i=1 ; i<=n;i++){
 let str="";
for(let j=i; j>0;j--){
    str+=" * "
}

for(let k=i; k<=n;k++){
    str+=" - "
} 
console.log(str);  
}