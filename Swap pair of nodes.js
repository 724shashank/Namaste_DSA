function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

var swapPairs = function(head) {
    if(!head||!head.next) return head;
    let dummy = new ListNode();
    dummy.next = head;
    let pre = dummy;
    let cur = head;
    let nxt = head.next;
    while(cur&&nxt){
        pre.next = nxt;
        cur.next = nxt.next;
        nxt.next = cur;
        pre = cur;
        cur = pre.next;
        nxt = cur && cur.next;
    }
    return dummy.next
};

let result = swapPairs(head);
while(result){
   
    console.log(result.val);
    result = result.next;
}