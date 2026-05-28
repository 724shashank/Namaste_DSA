//Odd Even Linked List
//Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.The first node is considered odd, and the second node is even, and so on.


let Node = function (val,next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}



let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

function oddEvenList(head){
if(!head) return head;
let odd = head;
let even = head.next;
let evenStart = even ;
while(odd.next && even.next){
   odd.next= odd.next.next;
   odd= odd.next;
   even.next = even.next.next;
   even = even.next
}
odd.next = evenStart;
return head;
}

let result = oddEvenList(head);

while(result){
    console.log(result.val);
    result = result.next
}
