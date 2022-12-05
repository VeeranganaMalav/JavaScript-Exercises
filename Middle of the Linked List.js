/* Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node. */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function middleNode(head) {
    let fast = head;
    while (fast != null && fast.next != null) {
        head = head.next;
        fast = fast.next.next;
    }
    return head;
};

function linkedList(arr){
    let list = new ListNode(arr[0]);
    
    let selectedNode = list;
    for(let i = 1; i < arr.length; i++){
      selectedNode.next = new ListNode(arr[i]);
      selectedNode = selectedNode.next;
    } 
  
    return list;
}

let l = [1,2,3,4,5];

var output = middleNode(linkedList(l));
console.log(output);