export function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let res = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target){
            res = mid;
        }

        if(nums[left] < nums[right] && nums[right] !== target) {
            if(nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else if (nums[left] === target) {
            return left;
        } else {
            left++;
        }
    }

    return res;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([1], 0));
console.log(search([1,3], 3));
console.log(search([1,3,5], 5));
console.log(search([3,5,1], 3));
console.log(search([1,2,3,4,5,6], 4));




