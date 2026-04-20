//Via Iteration

let Node = function(val){
    this.val=val;
    this.next = null;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);



var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }
    head = prev
    return head;
};

console.log(reverseList(head));

//Via Recursion

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let preNode = function(curr){
        if(curr===null) return prev;
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp 
        return preNode(curr);
    }
    
   preNode(curr);
   
    head = prev;
    return head;
};