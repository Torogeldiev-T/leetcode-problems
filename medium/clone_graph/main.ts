class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

function cloneGraph(node: _Node | null): _Node | null {
    const cloned: Map<number, _Node> = new Map();

    return dfs(node);

    function dfs(node: _Node | null): _Node | null {
        if (!node) {
            return null;
        }

        if (cloned.has(node.val)) {
            return cloned.get(node.val);
        }

        const newNode = new _Node(node.val);

        cloned.set(node.val, newNode);

        const neighbors = node.neighbors;

        for (const neighbor of neighbors) {
            const newNeighbor = dfs(neighbor);

            if (newNeighbor) {
                newNode.neighbors.push(newNeighbor);
            }
        }

        return newNode;
    }
};
