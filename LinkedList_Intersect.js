function Node(val,next){
    this.val=val;
    this.next = null;
}

let inter = new Node(70);
inter.next = new Node(80);
inter.next.next = new Node(90);
inter.next.next.next = new Node(100);

let headA = new Node(10);
headA.next = new Node(20);
headA.next.next = new Node(30);
headA.next.next.next = inter;


let headB = new Node(30);
headB.next = new Node(31);
headB.next.next = new Node(32);
headB.next.next.next = new Node(33);
headB.next.next.next.next = inter;

var getIntersectionNode = function(headA, headB) {
    let store = new Set();
    let currB = headB;
    while(headB){
        store.add(headB);
        headB=headB.next;
    }
    
    while(headA){
        if(store.has(headA)) return headA;
        else{
            headA=headA.next;
        }
    }
    return null;
};
console.log(getIntersectionNode(headA, headB))

