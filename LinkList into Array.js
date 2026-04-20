let convertToArray = function(head){
    let result = [];
    let current = head;
    
    while(current !=null){
        result.push(current.val);
        current = current.next
    }
    
    return result
    
}

let Node = function(val){
    this.val=val;
    this.next = null;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
console.log(convertToArray(head));