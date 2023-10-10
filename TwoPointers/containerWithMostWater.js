// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

// Constraints:
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// 49
const height2 = [1, 1];
// 1

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    
    let left = 0;
    let right = height.length - 1;
    let maxWater = Math.min(height[0], height[height.length-1]) * (right-left);
    while (left < right) {

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
        let currentWater = Math.min(height[left], height[right]) * (right - left);
        if (currentWater > maxWater) maxWater = currentWater;
    }
    return maxWater;
};

console.log("case 1");
console.log(maxArea(height1));
console.log("case 2");
console.log(maxArea(height2));