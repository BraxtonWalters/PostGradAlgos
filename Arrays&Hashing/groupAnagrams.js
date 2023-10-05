// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
const strs2 = [""]
// Output: [[""]]
const strs3 = ["a"]
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const obj = {};

    for (const str of strs) {
        const string = str.split("").sort().join("")
        if (!obj[string]) {
            obj[string] = [str];
        } else {
            obj[string].push(str)
        }
    }
    return Object.values(obj)
};

console.log("case 1");
console.log(groupAnagrams(strs1));
console.log("case 2");
console.log(groupAnagrams(strs2));
console.log("case 3");
console.log(groupAnagrams(strs3));