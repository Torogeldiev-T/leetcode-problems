const romanToIntMap: Record<string, number> = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
};


function romanToInt(s: string): number {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (romanToIntMap[s[i]+ s[i+1]] && i + 1 < s.length) {
            res += romanToIntMap[s[i]+ s[i+1]]
            i++;
        } else if (romanToIntMap[s[i]]) {
            res += romanToIntMap[s[i]]
        }
    }
    return res
};