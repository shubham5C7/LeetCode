/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let dummy = new ListNode();
    let curr= head;
    let dummyhead = dummy;
    while(curr !== null && curr.next !== null){
        dummy.val = curr.val;
        curr = curr.next;
        dummy.next = new ListNode();
        dummy = dummy.next
        
    }
    dummy.val = curr.val 
    dummy.next = null;
   
   let prev = null
   let current = dummyhead;
   while(current !== null){
    let next = current.next;
     current.next = prev
    prev = current
    current = next
   }
  
  let p1 = prev,p2 = head
  let sum = 0,maxi=0;
  while(p1!== null && p2!==null){
    sum = p1.val + p2.val;
    if(sum > maxi){
        maxi = sum
    }
    p1 = p1.next
    p2 = p2.next

  }
  return maxi
};