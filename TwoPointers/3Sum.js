/**
 
@param {number[]} nums
@return {number[][]}
*/

const nums = [-1, 0, 1, 2, -1, -4]
const nums2 = [0, 0, 0, 0]
const nums3 = [1, -1, -1, 0]
const nums4 = [-2, 0, 0, 2, 2]
const nums5 = [-2, -1, 0, 2, 3]
//
// [-4, -1, -1, 0, 1, 2]
// Output: [[-1,-1,2],[-1,0,1]]
// nums3 sorted is [-1, -1, 0, 1]
// first we have first -1 gets grouped with 0, 1
// the next -1 also gets grouped with 0 and 1
var threeSum = function (nums) {
  let result = []

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) continue;

    if (nums[i - 1] !== nums[i]) {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]])
          while (nums[left] === nums[left + 1] && left < right) {
            left++;
            console.log(nums[left]);
          }
          while (nums[right] === nums[right - 1] && left < right) {
            right--;
            console.log(nums[right]);
          }
          left++;
          right--;
          console.log("after while loops");
          console.log(nums[left], nums[right]);
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};

console.log("case 1");
console.log(threeSum(nums))
console.log("case 2");
console.log(threeSum(nums2))
console.log("case 3");
console.log(threeSum(nums3))
console.log("case 4");
console.log(threeSum(nums4))
console.log("case 5");
console.log(threeSum(nums5))