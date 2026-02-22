function maxAreaOfIsland(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array(rows).fill(null).map(_e => Array(cols).fill(false));

    let maxArea = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            const area = bfs(r, c);

            maxArea = Math.max(area, maxArea);
        }
    }

    return maxArea;

    function bfs(r, c): number {
        const queue = [];
        let head = 0;

        let area = 0;

        if (grid[r][c] === 1 && !visited[r][c]) {
            queue.push([r, c]);
            visited[r][c] = true;
        }

        while (head < queue.length) {
            const [r, c] = queue[head];

            area++;

            const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            for (const [dr, dc] of dirs) {
                const newR = r + dr;
                const newC = c + dc;

                if (
                    isValid(newR, newC, rows, cols) &&
                    grid[newR][newC] === 1 &&
                    !visited[newR][newC]
                ) {
                    queue.push([newR, newC]);
                    visited[newR][newC] = true;
                }
            }
            head++;
        }
        return area;
    }
};

function isValid(newR, newC, m: number, n: number): boolean {
    return newR >= 0 && newR < m && newC >= 0 && newC < n;
}