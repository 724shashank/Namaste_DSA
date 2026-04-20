let Node = function(val){
    this.val=val;
    this.next = null;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);



var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast!= null&& fast.next != null){ //if fast is null then stop the loop due to short circuiting
     slow = slow.next
     fast = fast.next.next;
    }

return slow
};

console.log(middleNode(head));