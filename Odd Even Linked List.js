/* Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity. */

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function oddEvenList(head){
    if(head === null){
        return null;
    }

    let oddNode = head;
    let evenNode = head.next;
    let evenHead = evenNode;

    while(evenNode !== null && evenNode.next !== null){
        oddNode.next = evenNode.next;
        oddNode = oddNode.next;
        evenNode.next = oddNode.next;
        evenNode = evenNode.next;
    }

    oddNode.next = evenHead;
    return head;
}


function linkedList(arr){
    let list = new ListNode(arr[0]);
    
    let selectedNode = list;
    for(let i = 1; i < arr.length; i++){
      selectedNode.next = new ListNode(arr[i]);
      selectedNode = selectedNode.next;
    } 
  
    return list;
}

let array = [1,2,3,4,5];

var reorderedList = oddEvenList(linkedList(array));
console.log(reorderedList);