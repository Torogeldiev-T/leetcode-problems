function dailyTemperatures(temperatures: number[]): number[] {
    let stack: number[] = [];
    const res: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let idx = stack[stack.length - 1];

            res[idx] = i - idx;

            stack.pop();
        }

        stack.push(i);
        res.push(0);
    }

    return res;
};