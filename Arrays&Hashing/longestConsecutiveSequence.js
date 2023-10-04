// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

const nums1 = [100, 4, 200, 1, 3, 2];
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums3 = [0,0,-1];
const nums4 = [9,1,4,7,3,-1,0,5,8,-1,6];
// [0, 0, 1, 2, 3, 4, 5, 6, 7, 8]

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);
    console.log(nums);
    let longestSeqLength = 1;
    let currentSeqLength = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] === nums[i - 1] + 1) {
            currentSeqLength += 1;
        } else {
            currentSeqLength = 1;
        }
        if (currentSeqLength > longestSeqLength) longestSeqLength = currentSeqLength;

    }
    return longestSeqLength;
};

console.log("case 1");
console.log(longestConsecutive(nums1));
console.log("case 2");
console.log(longestConsecutive(nums2));
console.log("case 3");
console.log(longestConsecutive(nums3));
console.log("case 4");
console.log(longestConsecutive(nums4));