function threeSumClosest(nums: number[], target: number): number {
    const sortedNums = nums.sort((a, b) => a - b);
    let resSum = sortedNums[0] + sortedNums[1] + sortedNums[2];
    let minDiff = Number.MAX_VALUE;

    for (let i = 0; i < sortedNums.length - 1; i++) {
        let left = i + 1;
        let right = sortedNums.length - 1;

        while (left < right) {
            let sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
            let diff = Math.abs(target - sum);

            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return sum;
            }

            if (diff < minDiff) {
                minDiff = diff;
                resSum = sum;
            }
        }
    }

    return resSum;
};