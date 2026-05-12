//Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.



let Node = function(val,next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let head = new Node(1);
head.next = new Node(20);
head.next.next = new Node(1);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);

var removeElements = function(head, val) {
let sentinel = new Node();
sentinel.next= head;
let prev = sentinel
while(prev && prev.next){
if(prev.next.val === val){
   prev.next = prev.next.next;
   
}else{
    prev = prev.next;
} 
}
return sentinel.next
};

console.log(removeElements(head,1))