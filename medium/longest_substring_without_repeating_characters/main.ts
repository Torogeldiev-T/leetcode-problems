function lengthOfLongestSubstring(s: string): number {
    let start = 0;
    let maxLength = 0;

    if (s.length <= 1) {
        return s.length;
    }

    const strMap: Map<string, number> = new Map();

    for (let end = 0; end < s.length; end++) {
        const currChar = s[end];

        if (strMap.has(currChar) && strMap.get(currChar) >= start) {
            start = strMap.get(currChar) + 1;
        }

        strMap.set(currChar, end);

        const length = end - start + 1;

        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
};
