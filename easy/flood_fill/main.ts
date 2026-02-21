function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const queue = [{ row: sr, col: sc }];
    const currColor = image[sr][sc];
    const visited = Array(image.length).fill(null).map(
        e => Array(image[0].length).fill(false)
    );

    while (queue.length > 0) {
        const currPix = queue.shift();

        image[currPix.row][currPix.col] = color;
        visited[currPix.row][currPix.col] = true;

        const dirs = getDirections(
            currPix.row,
            currPix.col,
            image.length,
            image[currPix.row].length
        );

        for (const dir of dirs) {
            if (image[dir.row][dir.col] === currColor && !visited[dir.row][dir.col]) {
                queue.push({ row: dir.row, col: dir.col });

                image[dir.row][dir.col] = color;
                visited[dir.row][dir.col];
            }
        }
    }

    return image;
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