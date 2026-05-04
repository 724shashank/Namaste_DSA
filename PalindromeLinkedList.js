//Converting into an Array 

let Node = function(val){
    this.val=val;
    this.next = null;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

var isPalindrome = function(head) {
    let arr = [];
    let curr = head;
    while(curr !=null){
        arr.push(curr.val);
        curr = curr.next;
    }
    let j = arr.length-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === arr[j]){
            j--;
        }
        else {
            return false;
        }
    }
    return true ;
};

// By Moving to middle of linked list and reversing the list from middle and Traversing from both the ends

var isPalinDrome = function(head) {
let slow = head;
let fast = head;
let prev = null;

//Finding the Middle of Node 

while(fast !=null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
}

//Reversing the second Half

while(slow){
let temp = slow.next;
slow.next = prev;
prev = slow;
slow = temp;
}

//Traversing Both the Ends...

let firstPointer = head;
let secondPointer = prev;

while(firstPointer != null && secondPointer != null ){
    if(firstPointer.val === secondPointer.val){
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }
    else{
        return false
    }
}
return true;
   
}