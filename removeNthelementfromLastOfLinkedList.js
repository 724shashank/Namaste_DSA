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
    console.log(i)
    let position = i-n;
    if(position === 0){
        return head.next;
    }
    let newCurr=head;
    let j =0;
    while(newCurr && j!=position-1 ){
        newCurr = newCurr.next; 
        j++;
    }
    
    newCurr.next = newCurr.next.next;
    
    return head;
}

console.log(removeNthFromEnd(head,1))