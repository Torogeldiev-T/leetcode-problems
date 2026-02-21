function numIslands(grid: string[][]): number {
    const visited = Array(grid.length).fill(null).map(
        _e => Array(grid[0].length).fill(false)
    );

    const queue = [];
    let res = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {

            if (grid[i][j] === '1' && !visited[i][j]) {
                queue.push([i, j]);
                visited[i][j] = true;
                res++;
            }

            while (queue.length > 0) {
                const curr = queue.shift();
                const currRow = curr[0];
                const currCol = curr[1];

                const dirs = getDirections(currRow, currCol, grid.length, grid[currRow].length);

                for (let dir of dirs) {
                    if (!visited[dir.row][dir.col] && grid[dir.row][dir.col] === '1') {
                        queue.push([dir.row, dir.col]);
                        visited[dir.row][dir.col] = true;
                    }
                }
            }
        }
    }

    return res;
};

function getDirections(
    row: number,
    col: number,
    m: number,
    n: number
): Array<{ row: number, col: number }> {
    const allDirs = [
        { row: row + 1, col },
        { row: row - 1, col },
        { row, col: col + 1 },
        { row, col: col - 1 }
    ];

    return allDirs.filter(e => isValid(e.row, e.col, m, n));
}

function isValid(newRow, newCol, m: number, n: number): boolean {
    return newRow >= 0 && newRow < m && newCol >= 0 && newCol < n;
}
