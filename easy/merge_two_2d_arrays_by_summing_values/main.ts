function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    let res = {};
    let finalRes: number[][] = [];

    computeSum(nums1, res);
    computeSum(nums2, res);


    Object.keys(res).sort().forEach(key => {
        finalRes.push(res[key]);
    });

    return finalRes;
};

function computeSum(nums: number[][], res: Object) {
    nums.forEach(arr => {
        const [id, val] = arr;
        if (res[id]) {
            let prevVal = res[id][1];
            res[id] = [id, prevVal + val];
        } else {
            res[id] = [id, val]
        }
    });
}