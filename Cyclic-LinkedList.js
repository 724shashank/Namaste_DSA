//Using Set Approach 

let Node = function(val){
    this.val=val;
    this.next = null;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = head.next;

var hasCycle = function(head) {
    let set1 = new Set();
    let curr = head;
    while(curr !=null){
    if(set1.has(curr)) return true;
    else{
        set1.add(curr);
        curr = curr.next;
    }
    }
    return false;
};

console.log(hasCycle(head));

//Using Floyd's Cycle Finding Algo.

var hasCycle = function(head) {
    let slow = head;
    let fast = head.next;
    while(fast !=null && fast.next != null){
        if(slow===fast) return true;
        else{
            slow=slow.next;
            fast = fast.next.next;
        }
    }
    return false;
};

console.log(hasCycle(head));
