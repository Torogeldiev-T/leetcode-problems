
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const stackP = [p];
    const stackQ = [q];

    while (stackP.length > 0 && stackQ.length > 0) {
        const currP = stackP.pop();
        const currQ = stackQ.pop();

        if (!currP && !currQ) {
            continue;
        }

        if (currP && currQ && currP.val === currQ.val) {
            stackP.push(currP.left);
            stackP.push(currP.right);

            stackQ.push(currQ.left);
            stackQ.push(currQ.right);
        } else {
            return false;
        }
    }

    return true;
};