function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    let min = 5001;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < min){
            min = nums[mid];
        }

        if(nums[left] < nums[right]) {
            right = mid - 1;
        } else {
            left++;
        }
    }

    return min;
};

console.log(findMin([3,4,5,1,2]));
console.log(JSON.stringify([4,5,6,7,0,1,2]))
console.log(findMin([4,5,6,7,0,1,2]));

console.log(findMin([11,13,15,17]));

console.log(findMin([5,1,2,3,4]));
