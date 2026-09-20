/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

   if(head === null) return null


  if (head.val === val) {
        return removeElements(head.next, val);
    }

   if(head.next!==null && head.next.val === val){
    head.next = head.next.next
   }

  head.next =  removeElements(head.next,val)
 return head
};