function minEatingSpeed(piles: number[], h: number): number {
    let left = 0;
    let right = Math.max(...piles);
    let result;

    while (left <= right){
        let totalHours = 0;
        let mid = Math.floor((left + right) / 2);

        for (let i = 0; i < piles.length; i++) {
            let hoursToEatPile = Math.ceil(piles[i] / mid);
            totalHours += hoursToEatPile;
        }

        if (totalHours <= h) {
            result = mid;
            right = mid - 1;
        } else if (totalHours > h) {
            left = mid + 1;
        }
    }

    return result;
};

console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([30,11,23,4,20], 5));
console.log(minEatingSpeed([30,11,23,4,20], 6));
