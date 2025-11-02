export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let currNode: ListNode = new ListNode(-101, null);
    let startNode: ListNode = null;

    while (list1 || list2) {
        if ((list1 && !list2) || (list1 && list1.val < list2.val)) {
            currNode.next = new ListNode(list1.val, null);
            list1 = list1.next;
        } else if ((list2 && !list1) || (list2 && list2.val <= list1.val)) {
            currNode.next = new ListNode(list2.val, null);
            list2 = list2.next;
        }

        currNode = currNode.next;

        if(!startNode) {
            startNode = currNode;
        }
    }

    return startNode;
};