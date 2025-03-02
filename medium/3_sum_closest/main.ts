function threeSumClosest(nums: number[], target: number): number {
    const sortedNums = nums.sort((a, b) => a - b);
    let res = {};

    for (let i = 0, j = sortedNums.length - 1; i + 1 < j;) {
        let mid = Math.trunc((i + j) / 2.0);
        const sum = sortedNums[i] + sortedNums[j] + sortedNums[mid];
        const diff = Math.abs(target - sum);

        res[diff] = sum;

        let leftSum, rightSum;
        let leftPrevDiff, rightPrevDiff;
        while (mid - 1 > i) {
            leftSum = sortedNums[i] + sortedNums[j] + sortedNums[mid - 1];
            let leftDiff = Math.abs(target - leftSum);

            if (leftDiff > leftPrevDiff) {
                break;
            }

            res[leftDiff] = leftSum
            mid--;
            leftPrevDiff=leftDiff;
        }

        while (mid + 1 < j) {
            rightSum = sortedNums[i] + sortedNums[j] + sortedNums[mid + 1];
            let rightDiff=  Math.abs(target - rightSum);

            if (rightDiff > rightPrevDiff) {
                break;
            }
            res[rightDiff] = rightSum;
            mid++;
            rightPrevDiff =rightDiff;
        }
        if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        } else {
            return target;
        }
    }

    const key = Math.min(...Object.keys(res).map(Number));
    return res[key];
};