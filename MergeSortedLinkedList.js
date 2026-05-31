let Node = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

let l1 = new Node(2);
l1.next = new Node(5);
l1.next.next = new Node(7);
l1.next.next.next = new Node(8);


let l2 = new Node(1);
l2.next = new Node(3);
l2.next.next = new Node(4);
l2.next.next.next = new Node(6);
l2.next.next.next.next = new Node(9);

var mergeTwoLists = function(l1,l2) {
let cur1 = l1;
let cur2 = l2;
let head = new Node();
let cur3 = head
while(cur1 && cur2){
    if(cur1.val <=cur2.val){
       let addr1=cur1.next;
       cur3.next = cur1;
       cur1 = addr1;
    }else{
       let addr2=cur2.next;
       cur3.next = cur2;
       cur2 = addr2;
    }
    cur3 = cur3.next;
}
if(cur1){
  cur3.next =  cur1;
}else{
   cur3.next =  cur2;
}

return head.next;
};

let result = mergeTwoLists(l1,l2)
while(result){
    console.log(result.val);
    result= result.next;
}
