function loudAndRich(richer: number[][], quiet: number[]): number[] {
    const n = quiet.length;

    const graph: number[][] = Array.from(
        { length: n },
        () => []
    );

    for (const [rich, poor] of richer) {
        graph[poor].push(rich);
    }

    const res: number[] = Array(n).fill(-1);

    function dfs(person: number): number {
        if (res[person] !== -1) {
            return res[person];
        }

        res[person] = person;

        for (const richerPerson of graph[person]) {
            const candidate = dfs(richerPerson);

            if (
                quiet[candidate] <
                quiet[res[person]]
            ) {
                res[person] = candidate;
            }
        }

        return res[person];
    }

    for (let i = 0; i < n; i++) {
        dfs(i);
    }

    return res;
}