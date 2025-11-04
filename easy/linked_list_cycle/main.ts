/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    const MIN_CONSTRAINT = -1000000;
    let offset = MIN_CONSTRAINT - 1;

    while(head) {
        if (head.val < MIN_CONSTRAINT && head.val >= offset){
            return true;
        }

        head.val = offset;
        head = head.next;

        offset--;
    }

    return false;
};