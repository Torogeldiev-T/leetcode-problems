class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return []
    }

    const result = [];
    const queue = [root];

    let head = 0;

    while (head < queue.length) {
        const levelResult = [];
        const levelSize = queue.length - head;

        for (let i = head; i < head + levelSize; i++) {
            const node = queue[i];

            levelResult.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        head += levelSize;

        if (levelResult.length > 0) {
            result.push(levelResult);
        }
    }

    return result;
};