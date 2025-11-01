function carFleet(target: number, position: number[], speed: number[]): number {
    let stack: number[] = [];

    let speedMap = {};
    for (let i = 0; i < position.length; i++) {
        speedMap[position[i]] = speed[i];
    }

    position = position.sort((a, b) => a - b);

    for (let i = position.length - 1; i >= 0; i--) {
        let hoursToReach: number = (target - position[i]) / speedMap[position[i]];

        if (stack.length === 0 || hoursToReach > stack[stack.length - 1]) {
            stack.push(hoursToReach);
        }
    }

    return stack.length;
};