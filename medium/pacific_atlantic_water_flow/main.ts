const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function pacificAtlantic(heights: number[][]): number[][] {
    const rows = heights.length;
    const cols = heights[0].length;

    const pacific: Set<string> = new Set();
    const atlantic: Set<string> = new Set();

    const result: number[][] = [];

    for (let c = 0; c < cols; c++) {
        dfs(0, c, pacific);
        dfs(rows - 1, c, atlantic);
    }

    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pacific);
        dfs(r, cols - 1, atlantic);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const key = getKey(r, c);
            if (atlantic.has(key) && pacific.has(key)) {
                result.push([r, c]);
            }
        }
    }

    return result;

    function dfs(row: number, col: number, visited: Set<string>): void {
        const key = getKey(row, col);

        if (!isValid(row, col) || visited.has(getKey(row, col))) {
            return;
        }

        visited.add(key);

        for (const [dr, dc] of DIRECTIONS) {
            const newR = row + dr;
            const newC = col + dc;

            if (isValid(newR, newC) && heights[newR][newC] >= heights[row][col]) {
                dfs(newR, newC, visited);
            }
        }
    }

    function isValid(row: number, col: number) {
        return row >= 0 && row < rows && col >= 0 && col < cols;
    }
}

function getKey(r: number, c: number): string {
    return `${r},${c}`;
}
