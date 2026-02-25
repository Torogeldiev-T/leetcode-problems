const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function solve(board: string[][]): void {
    const rows = board.length;
    const cols = board[0].length;

    const visited = Array(rows).fill(null).map(_e => Array(cols).fill(false));

    for (let r = 0; r < rows; r++) {
        dfs(r, 0);
        dfs(r, cols - 1);
    }

    for (let c = 0; c < cols; c++) {
        dfs(0, c);
        dfs(rows - 1, c);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O' && !visited[r][c]) {
                dfs(r, c, true);
            }
        }
    }

    function dfs(row: number, col: number, replace: boolean = false): void {
        if (!isValid(row, col)) {
            return;
        }

        visited[row][col] = true;

        if (replace) {
            board[row][col] = 'X';
        }

        for (const [dr, dc] of DIRECTIONS) {
            const newR = row + dr;
            const newC = col + dc;

            if (isValid(newR, newC)) {
                dfs(newR, newC, replace);
            }
        }
    }

    function isValid(r: number, c: number): boolean {
        return r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === 'O' && !visited[r][c];
    }
};