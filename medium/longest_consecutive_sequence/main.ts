function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);

    let longest = 0;
    for (let val of set) {
        if (!set.has(val - 1)) {
            let length = 1;
            while(set.has(val + 1)) {
                length++;
                val++;
            }

            if (length > longest) {
                longest = length;
            }
        }
    }

    return longest;
};
