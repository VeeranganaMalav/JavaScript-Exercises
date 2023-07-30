/* Given the 'head' of a singly linked list and an integer 'k', split the linked list into 'k' consecutive linked list parts.

The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

Return an array of the'k' parts. */

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function splitListToParts(head, k){

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

let l = [1,2,3];

var output = splitListToParts(linkedList(l), 5);
console.log(output);