/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. */

var mergeTwoLists = function(list1, list2) {
    let node = new ListNode();
    let head = node;

    let current1 = list1;
    let current2 = list2;
    while(current1 && current2){
        if(current1.val < current2.val){
            head.next = new ListNode(current1.val);
            current1 = current1.next;
        }
        else if(current2.val < current1.val){
            head.next = new ListNode(current2.val);
            current2 = current2.next;
        }
        else{
            head.next = new ListNode(current1.val);
            current1 = current1.next;
        }

        head = head.next;
    }

    while(current1){
        head.next = new ListNode(current1.val);
        current1 = current1.next;
        head = head.next;
    }

    while(current2){
        head.next = new ListNode(current2.val);
        current2 = current2.next;
        head = head.next;
    }

    return node.next;

};

const list1 = [1,2,4];
const list2 = [1,3,4];