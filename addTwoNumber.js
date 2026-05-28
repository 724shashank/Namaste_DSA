let Node = function (val,next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

//542
let l1 = new Node(9);
l1.next = new Node(9);
l1.next.next = new Node(9);
l1.next.next.next = new Node(9);
l1.next.next.next.next = new Node(9);
l1.next.next.next.next.next = new Node(9);
l1.next.next.next.next.next.next = new Node(9);
//425
let l2 = new Node(9);
l2.next = new Node(9);
l2.next.next = new Node(9);
l2.next.next.next = new Node(9);

function addTwoNumbers(l1, l2) {
    let cur1 = l1;
    let cur2 = l2;
    let head = null;
    let carry = 0;
    let digit = 0;
    while(cur1 || cur2 || carry){
        val1 = cur1?cur1.val:0;
        val2 = cur2?cur2.val:0;
        let sum = val1+val2+carry;
        carry = Math.floor(sum/10);
        digit = Math.floor(sum%10);
        sum = digit;
        cur1 = cur1?cur1.next:0;
        cur2 = cur2?cur2.next:0;
        if(!head){
         head= new Node(sum);
         cur3 = head;
        }
        else{
            cur3.next = new Node(sum);
            cur3 = cur3.next
        }
    }
    
    return head;
}
let result = addTwoNumbers(l1,l2);
while(result){
    console.log(result.val);
    result = result.next;
}

