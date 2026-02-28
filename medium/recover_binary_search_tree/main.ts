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

function recoverTree(root: TreeNode | null): void {
    let prevNode: TreeNode | undefined;
    let first: TreeNode | undefined;
    let second: TreeNode | undefined;

    const res = [];

    recover(root);

    console.log(res);

    const t = first.val;

    first.val = second.val;
    second.val = t;

    /// end of method

    function recover(node: TreeNode | null): void {
        if (!node) {
            return;
        }

        recover(node.left);

        if (prevNode && prevNode.val > node.val) {
            if (!first) {
                first = prevNode;
                second = node;
            } else {
                second = node;
            }

        }

        prevNode = node;

        // dubug
        res.push(node.val);

        recover(node.right);
    }
};
