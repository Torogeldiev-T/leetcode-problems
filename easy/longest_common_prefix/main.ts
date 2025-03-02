function longestCommonPrefix(strs: string[]): string {
    let res = strs[0];

    for (let j = 1; j < strs.length; j++) {
        const str = strs[j];

        if (str.length == 0) {
            return "";
        }

        for (let i = 0; i < str.length; i++) {
            if (str[i] != res[i]) {
                res = res.slice(0, i);
                if (!res) {
                    return "";
                }
                break;
            }

            if (i == str.length - 1) {
                res = str;
            }
        }
    }

    return res;
};