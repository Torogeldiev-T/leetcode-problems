function numTrees(n: number): number {
    const dp = Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let nodes = 2; nodes <= n; nodes++) {
        for (let root = 1; root <= nodes; root++) {

            const leftNodes = root - 1;
            const rightNodes = nodes - root;

            dp[nodes] +=
                dp[leftNodes] * dp[rightNodes];
        }
    }

    return dp[n];
}