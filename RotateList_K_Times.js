
let Node = function(val){
    this.val=val;
    this.next = null;
}

let head = new Node(1);
head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
var rotateRight = function(head,k) {
   if(!head || !head.next) return head;
    let cur = head
    let length = 0;
    while(cur){
        cur=cur.next;
        length++;
    }
    k=k%length;
    let slow = head;
    let fast = head;
    
    for(let i=0;i<k;i++){
        fast = fast.next
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
   fast.next = head;
    let newHead = slow.next
    slow.next = null;


return newHead
};

let result=rotateRight(head,0);
while(result){
    console.log(result.val);
    result = result.next;
}