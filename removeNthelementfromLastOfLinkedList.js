let Node = function (val){
    this.val=val;
    this.next = null;
}



let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

function removeNthFromEnd(head,n){
    let i = 0
    let curr =head;
    while(curr){
       curr=curr.next;
       i++;
    }
  
    let position = i-n;
    if(position === 0){
        return head.next;
    }
    let newCurr=head;
    let j =0;
    while(j!=position-1){
        newCurr = newCurr.next; 
        j++;
    }
    
    newCurr.next = newCurr.next.next;
    
    return head;
}

//Second Method

function removeNthFromEnd(head,n){
   let sentinel=new Node();
   sentinel.next = head;
   let fast = sentinel;
for(let i=0;i<n;i++){
    fast=fast.next;
}
let slow = sentinel;
while(fast.next){
    fast= fast.next;
    slow= slow.next;
}
   slow.next = slow.next.next; 
   return sentinel.next;
}

let result = removeNthFromEnd(head,2);

while(result){
    console.log(result.val);
    result=result.next;
}