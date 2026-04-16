class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const remainingNumMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const remainingNum = remainingNumMap.get(target - nums[i]);
            if (remainingNum != null && remainingNum != i) {
                return [i, remainingNum];
            } else {
                remainingNumMap.set(nums[i], i);
            }
        }
    }
}
