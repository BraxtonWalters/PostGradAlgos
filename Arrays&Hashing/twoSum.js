// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.



// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
//             0   1    2  3   4   5  6  7  8    9
const nums1 = [12, 14, 22, 3, 66, 23, 2, 7, 11, 15];
target1 = 9;
// [0, 1]
const nums2 = [3, 2, 4];
target2 = 6;
// [1,2]
const nums3 = [3, 3];
target3 = 6;
// [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// [2, 7, 11, 15]
var twoSum = function (nums, target) {
    
    // creating map
    let trackMap = {};

    // iterating through the nums list
    for(let i = 0; i <nums.length; i++){

        // creating an extra var bc dum
        // searching for a value that fits this formula
        const searchVal = target - nums[i];

        // checking the map if the value is there
        if(trackMap.hasOwnProperty(searchVal)){
            return [i, trackMap[searchVal]]
        } else {
            trackMap[nums[i]]= i;
        }
    }
    return false;
};

// console.log("case 1");
// console.log(twoSum(nums1, target1));
// console.log("case 2");
// console.log(twoSum(nums2, target2));
// console.log("case 3");
// console.log(twoSum(nums3, target3));


var twoSum2 = function(nums, target) {
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }
};

console.log("case 1");
console.log(twoSum2(nums1, target1));
console.log("case 2");
console.log(twoSum2(nums2, target2));
console.log("case 3");
console.log(twoSum2(nums3, target3));