function maxProfit(prices: number[]): number {
    let startRange = 0;
    let maxProfit = 0;

    if (prices.length <= 1) {
        return maxProfit;
    }

    for (let endRange = 1; endRange < prices.length; endRange++) {
        const profit = prices[endRange] - prices[startRange];

        if (profit > maxProfit) {
            maxProfit = profit;
        }

        if (prices[startRange] > prices[endRange]) {
            startRange = endRange;
        }
    }
    return maxProfit;
};
