const DELETED = 1;
const DIRECTIONS = [[-1, 0], [1, 0], [0, 1], [0, -1]];

function closedIsland(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;

    function dfs(r: number, c: number) {
        if (!isValid(r, c, rows, cols) || grid[r][c] !== 0) {
            return;
        }

        grid[r][c] = DELETED;

        for (const [dr, dc] of DIRECTIONS) {
            dfs(r + dr, c + dc);
        }
    }

    for (let row = 0; row < rows; row++) {
        dfs(row, 0);
        dfs(row, cols - 1);
    }

    for (let col = 0; col < cols; col++) {
        dfs(0, col);
        dfs(rows - 1, col);
    }

    let count = 0;

    for (let r = 1; r < rows - 1; r++) {
        for (let c = 1; c < cols - 1; c++) {
            if (grid[r][c] === 0) {
                dfs(r, c);
                count++;
            }
        }
    }

    return count;
};

function isValid(newR: number, newC: number, m: number, n: number): boolean {
    return newR >= 0 && newR < m && newC >= 0 && newC < n;
}
