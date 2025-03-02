class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let flatVals: number[] = [];
    for (let i = 0; i < lists.length; i++) {
        let currentNode = lists[i];
        while (currentNode != null) {
            flatVals.push(currentNode.val)
            currentNode = currentNode.next;
        }
    }
    flatVals = flatVals.sort((a, b) => a - b);

    if (flatVals[0] === undefined) {
        return null;
    }

    let startNode = new ListNode(flatVals[0]);
    let resNode = startNode;

    for (let i = 0; i < flatVals.length - 1; i++) {
        resNode.next = new ListNode(flatVals[i + 1]);
        resNode = resNode.next;
    }

    return startNode;
};