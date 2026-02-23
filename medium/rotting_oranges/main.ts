const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const FRESH_ORANGE = 1;
const ROTTING_ORANGE = 2;

function orangesRotting(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;

    const queue = [];

    let freshOranges = 0;
    let minutes = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === ROTTING_ORANGE) {
                queue.push([r, c]);
            } else if (grid[r][c] === FRESH_ORANGE) {
                freshOranges++;
            }
        }
    }

    if (freshOranges === 0) {
        return 0;
    }

    while (queue.length > 0) {
        const currSize = queue.length;

        for (let i = 0; i < currSize; i++) {
            const [row, col] = queue.shift();

            for (const [dr, dc] of DIRECTIONS) {
                const newR = row + dr;
                const newC = col + dc;

                if (isValid(newR, newC, rows, cols)) {
                    queue.push([newR, newC]);
                    grid[newR][newC] = ROTTING_ORANGE;

                    freshOranges--;
                }
            }
        }
        minutes++;
    }

    function isValid(r: number, c: number, m: number, n: number): boolean {
        return r >= 0 && r < m && c >= 0 && c < n && grid[r][c] === FRESH_ORANGE;
    }

    return freshOranges === 0 ? minutes - 1 : -1;
};
