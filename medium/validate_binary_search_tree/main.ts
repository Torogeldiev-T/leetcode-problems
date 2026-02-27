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

function isValidBST(root: TreeNode | null): boolean {
    let min;
    let max;

    return validate(root, min, max);

    function validate(node: TreeNode | null, min: number, max: number): boolean {
        if (!node) {
            return true;
        }


        if (min >= node.val || max <= node.val) {
            return false;
        }

        const leftRes = validate(node.left, min, node.val);
        const rightRes = validate(node.right, node.val, max);

        return leftRes && rightRes;
    }
};
