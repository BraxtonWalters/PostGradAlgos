// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achive this answer too.

// Constraints:
// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

const string1 = "ABAB";
const k1 = 2;
const string2 = "AABABBA";
const k2 = 1;
const string3 = "AABCDEEE";
const k3 = 1;


// "ABCAEFAFEDABA" k = 3 
// A[BCA] => A[BCAE] length of 5
// -> B[CAE] no Bs length of 4
// -> C[AEF] no Cs length of 4
// -> A[EFA] 1 A => A[EFAF] length of 5
// -> E[FAF] no Es length of 4
// -> F[AFE] 1 F => F[AFED] length of 5
// ->
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    // Create an array 'map' to store the count of characters (26 elements for A-Z)
    const map = Array(26).fill(0);

    let largeCount = 0; // Keep track of the most frequent character count
    let start = 0;     // Initialize the start of the window
    let maxLength = 0; // Initialize the maximum length of the valid substring

    for (let end = 0; end < s.length; end++) {
        const character = s[end];

        // Update the count of the current character in 'map'
        map[character.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;

        // Update 'largeCount' to keep track of the most frequent character count
        largeCount = Math.max(largeCount, map[character.charCodeAt(0) - 'A'.charCodeAt(0)]);

        // Check if the number of replacements needed is greater than 'k'
        if (end - start + 1 - largeCount > k) {
            // Decrement the count of the character at 'start'
            map[s[start].charCodeAt(0) - 'A'.charCodeAt(0)] -= 1;

            // Move the 'start' pointer to the right
            start += 1;
        }

        // Update 'maxLength' with the maximum valid substring length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Return the maximum length of the valid substring
    return maxLength;
};

// console.log("case 1");
// console.log(characterReplacement(string1, k1));
// console.log("case 2");
// console.log(characterReplacement(string2, k2));

// ABCDEEE     k = 2
// 1234
// AABABBA
var characterReplacement2 = function (s, k) {
    console.log(s, k);
    let max = 0; //4
    let curStart = 0; //2
    let curLetter = s[curStart]; //b
    let changeIdx = 0;// 3
    while (curStart < s.length || s.length - curStart < max) {
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        if (max === s.length) { return max }
        let changes = k;
        let curLength = 0;
        console.log("changes", changes, "current Max", max);
        for (var i = curStart; i < s.length; i++) {
            console.log("current Start Index", curStart, "start length", curLength);
            if (s[i] == curLetter) {
                console.log("found match");
                curLength += 1;
            } else if (changes > 0) {
                console.log("no match", "changes", changes);
                changes -= 1;
                curLength++;
                // only change on first change
                if (changes == k - 1) { changeIdx = i }
            } else if (s[i] !== curLetter && changes === 0) {
                console.log("no match and no changes");
                break
            }
            if (i == s.length - 1) {
                console.log("end string", changes);
                curLength += changes
            }
            if (max > s.length - curStart + changes) { break }
            // need to figure out how to reset the letter and curstart for the next set of looping
            if (curLength > max) { max = curLength }
        }
        // console.log('curret substring:', curLength, changeIdx)
        // need to figure out where to start (hint, what index did we end on)  did we change?
        curStart = changeIdx;
        curLetter = s[curStart]
        if (s.length - curStart < max) {
            console.log("I about to break", s.length - curStart, max);
            return max
        }
    }
    return max;
}

console.log("case 1");
console.log(characterReplacement2(string1, k1));
console.log("case 2");
console.log(characterReplacement2(string2, k2));
console.log("case 3");
console.log(characterReplacement2(string3, k3));
