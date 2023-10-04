// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]


// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


const nums1 = [1, 1, 1, 2, 2, 3, 3, 3];
const target1 = 2;
const nums2 = [1];
const target2 = 1;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    
    // creating a new map
    const map = new Map();

    // looping through the array to count the numbers or set the number into the map
    for (const num of nums) map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1)

    // sorting the map by it's values
    const mapDesc = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    // creating the result array this will be our return array
    const result = [];

    // iterating through the map and pushing k elements into the result array
    for (let i = 0; i < k; i++) result.push(Array.from(mapDesc.keys())[i]);

    // returning the array
    return result;
};

console.log("case 1");
console.log(topKFrequent(nums1, target1));
console.log("case 2");
console.log(topKFrequent(nums2, target2));
