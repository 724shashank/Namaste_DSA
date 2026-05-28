//Remove Duplicates from Sorted List

let Node = function (val,next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}



let head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(1);
head.next.next.next = new Node(1);
head.next.next.next.next = new Node(5);

function deleteDuplicate(head){
    let cur = head;
    while(cur && cur.next){
        if(cur.val === cur.next.val){
            cur.next = cur.next.next;
        }
        else{
            cur = cur.next;
        }
    }
    return head;
}

let result = deleteDuplicate(head);
while(result){
    console.log(result.val);
    result = result.next
}