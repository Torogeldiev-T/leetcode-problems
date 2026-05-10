function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (edges.length === 0) {
        return [0];
    }

    const inDegrees = Array(n).fill(0);
    const graph = Array.from({ length: n }, () => []);

    for (const [v1, v2] of edges) {
        graph[v1].push(v2);
        graph[v2].push(v1);

        inDegrees[v1]++;
        inDegrees[v2]++;
    }

    const queue = [];

    for (let i = 0; i < inDegrees.length; i++) {
        if (inDegrees[i] === 1) {
            queue.push(i);
        }
    }

    let remainingNodes = n;

    while (remainingNodes > 2) {
        const leafCount = queue.length;

        remainingNodes -= leafCount;

        for (let i = 0; i < leafCount; i++) {
            const leaf = queue.shift()!;

            for (const neighbor of graph[leaf]) {
                inDegrees[neighbor]--;

                if (inDegrees[neighbor] === 1) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return queue;
};
