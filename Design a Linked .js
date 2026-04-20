//Design your implementation of the linked list. You can choose to use a singly or doubly linked list. A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

let Node = function (val){
    this.val=val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head=null;
    this.size=0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(this.head === null||index>=this.size || index<0) return -1;
    let curr = this.head;
    let i=0;
    while(i!= index){
        curr = curr.next;
        i++;
    }
    return curr.val
};

/** 
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
   let newNode = new Node(val);
    if(this.head===null){  
        this.head = newNode;
    }
    else{
    let curr = this.head;
   while(curr.next != null){
        curr=curr.next;
    }
    curr.next = newNode;
        }
        this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
     if(index>this.size) return;
   let newNode = new Node(val);
   if(index === 0){
    this.addAtHead(val);
    return;
   }
   else if(index === this.size){
    this.addAtTail(val);
    return;
   }
    let curr = this.head;
    for(let i=0; i<index-1;i++){
        curr = curr.next
    }
    newNode.next = curr.next;
    curr.next= newNode;
    this.size++;
    return;
}; 
/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;

    let curr = this.head;

    if (index === 0) {
        this.head = curr.next;
    } else {
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }

    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */