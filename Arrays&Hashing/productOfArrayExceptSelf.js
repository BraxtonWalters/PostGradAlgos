// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

const nums1 = [1,2,3,4];
// Output: [24,12,8,6]
const nums2 = [-1,1,0,-3,3];
// Output: [0,0,9,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Step 1: we need to iterate the array 
    // Every index needs to be excluded from the math formula 
    // While we have that particular index excluded, we need to multiply every other value in the array
    // once we know the result, we push to our results array
    let results = [];
    for(let i = 0; i < nums.length; i++){ 
        //now we know that nums[i] will be excluded from the calc
        let mathResult = 1;
        for(let j = 0; j < nums.length; j++){ 
            // we want to start a zero, since we know that eventually we will need to include the first number in our math formula
            if(i === j){
                continue 
            } 
            //if we are not on the same index we can go ahead and multiply with the total amount
            mathResult *= nums[j];
        }
        // once we have gone through the entire array and multiplied everything (except our current index), we can push to the results array.
        if(mathResult === -0) {mathResult = 0}
        results.push(mathResult)
    }
    return results;
};

// console.log("case 1");
// console.log(productExceptSelf(nums1));
// console.log("case 2");
// console.log(productExceptSelf(nums2));

var productExceptSelf2 = function(nums) {
    
    let output = new Array(nums.length).fill(1);
    let leftProduct = 1;
    for(let i = 1; i < nums.length; i++) {
        leftProduct *= nums[i-1];
        output[i] = leftProduct;
    }

    let rightProduct = 1;
    for(let i = nums.length - 2; i >= 0; i--) {
        rightProduct *= nums[i+1];
        output[i] *= rightProduct;
    }
    return output;
};

console.log("case 1");
console.log(productExceptSelf2(nums1));
console.log("case 2");
console.log(productExceptSelf2(nums2));