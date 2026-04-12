function longestPalindrome(s: string): number {
    const letterMap = {};

    for (let i = 0; i < s.length; i++) {
        if (!letterMap[s[i]]) {
            letterMap[s[i]] = 1;
            continue;
        }

        letterMap[s[i]]++;
    }

    let res = 0;
    let addOnce = false;

    if (Object.keys(letterMap).length === 1) {
        return letterMap[s[0]];
    }

    for (const key in letterMap) {
        if (letterMap[key] % 2 === 0) {
            res += letterMap[key];
        } else {
            res += letterMap[key] - 1;
            addOnce = true;
        }
    }

    if (addOnce) {
        res += 1
    }

    return res;
};
