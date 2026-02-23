const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];
class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const queue = [];
        const visited = Array(rows).fill(null).map(_e => Array(cols).fill(false));

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                    visited[r][c] = true;
                }
            }
        }

        let distance = 1;

        let head = 0;

        while (head < queue.length) {
            const currSize = queue.length - head;

            for (let i = 0; i < currSize; i++) {
                const [row, col] = queue[head];

                for (const [dr, dc] of DIRECTIONS) {
                    const newR = row + dr;
                    const newC = col + dc;

                    if (isValid(newR, newC, rows, cols)) {
                        queue.push([newR, newC]);
                        grid[newR][newC] = distance;
                        visited[newR][newC] = true;
                    }
                }

                head++;
            }

            distance++;
        }

        return grid;

        function isValid(r, c, rows, cols) {
            return r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] !== -1 && !visited[r][c]
        }
    }
}
