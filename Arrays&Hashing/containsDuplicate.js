// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const nums1 = [1,2,3,1]
const nums2 = [1,2,3,4]
const nums3 = [1,1,1,3,3,4,3,2,4,2]
const nums4 = [0,4,5,0,3,6]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Create a variable to store the value 
    // prob a hashmap?
    const obj = {}
    // for loop?
    for(const num of nums){
        if (num in obj) {
            return true
        } else {
            // create new key and give it the value of num
            obj[num] = num;
        }
    }
    return false;
};

console.log("case 1");
console.log(containsDuplicate(nums1));
console.log("case 2");
console.log(containsDuplicate(nums2));
console.log("case 3");
console.log(containsDuplicate(nums3));
console.log("case 4");
console.log(containsDuplicate(nums4));