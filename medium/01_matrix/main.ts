const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function updateMatrix(mat: number[][]): number[][] {
    const rows = mat.length;
    const cols = mat[0].length;

    const visited = Array(rows).fill(null).map(_e => Array(cols).fill(false));
    const queue = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mat[r][c] === 0) {
                queue.push([r, c]);
            }
        }
    }

    let distance = 0;

    while (queue.length > 0) {
        const currSize = queue.length;

        for (let i = 0; i < currSize; i++) {
            const [row, col] = queue.shift();

            if (mat[row][col] !== 0) {
                mat[row][col] = distance;
            }

            for (const [dr, dc] of DIRECTIONS) {
                const newR = row + dr;
                const newC = col + dc;

                if (isValid(newR, newC, rows, cols)) {
                    queue.push([newR, newC]);
                    visited[newR][newC] = true;
                }
            }
        }

        distance++;
    }

    function isValid(r: number, c: number, m: number, n: number): boolean {
        return r >= 0 && r < m && c >= 0 && c < n && mat[r][c] === 1 && !visited[r][c];
    }

    return mat;
};