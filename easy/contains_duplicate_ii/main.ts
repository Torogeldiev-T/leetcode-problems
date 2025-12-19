function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map: Record<string, number> = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined && Math.abs(i - map[nums[i]]) <= k) {
            return true;
        }

        map[nums[i]] = i;
    }

    return false;
};