function searchRange(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;

    let start = -1;
    let end = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            start = mid;
            right = mid - 1;
        }
    }

    left = 0;
    right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            end = mid;
            left = mid + 1;
        }
    }

    return [start, end];
};
