/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // Check the head id null or not
    if(head === null || head.next === null) return head;

    // Find the Length of teh LL
    let curr = head ,length=0;

    while(curr!==null){
        length++
     curr = curr.next
    }

     // Reduce k
    k=k%length;

    // check the K value
    if(k===0) return head;


    // Find tail
    let tail = head

    while(tail.next !==null){
        tail = tail.next
    }

    // circule the LL
    tail.next = head

    // create a new tail
    let ptr = head

    for(let i=1;i<length-k;i++){
        ptr = ptr.next
    }
        // New head

    let newHead = ptr.next

       // Break the circle
    ptr.next = null;


      return newHead;
};