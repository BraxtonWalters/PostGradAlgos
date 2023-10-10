// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:
// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

const string1 = "eidboaoo";
const subString1 = "ab";
const string2 = "eidbaooo";
const subString2 = "ab";
const string3 = "ooolleoooleh";
const subString3 = "hello";

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s2.length < s1.length ) {
        return false;
    }
    // eidbaooo
    let s1Map = new Map();
    for (letter of s1) {
        if (!s1Map.has(letter)) s1Map.set(letter, 1);
        else s1Map.set(letter, s1Map.get(letter) + 1);
    }
    // iterate through the s2 until we find a letter that is in the map of the s1
    let startIndex = 0;
    for (i=0; i<s2.length - s1.length + 1; i++) {
        // console.log("first iterater " + i);
        if (s1Map.has(s2[i])) {
            // console.log("start s1 check")
            startIndex = i;
            let tempMap = new Map(s1Map);
            for (j=i; j< i + s1.length; j++) {
                
                // console.log("sec iterater " + j);
                // console.log(tempMap)
                // console.log(s2[j]);
                if (!tempMap.has(s2[j])) {
                    console.log("I made it to this if statement");
                    break
                }
                else {
                    // console.log("did it");
                    // console.log("current value: ", tempMap.get(s2[j]));
                    if (tempMap.get(s2[j]) === 0) {
                        // console.log("haha I made it here");
                        break;
                    }
                    tempMap.set(s2[j], tempMap.get(s2[j]) - 1);
                    // console.log("value of letter in tempMap:", tempMap.get(s2[j]));
                }
                if (j=== i + s1.length - 1) return true;
                
            }
        }
        
    }

    // we compare substring starting at the letter that is a match, to the map
    return false;
    
};

// console.log("case 1");
// console.log(checkInclusion(subString1, string1));
// console.log("case 2");
// console.log(checkInclusion(subString2, string2));
// console.log("case 3");
// console.log(checkInclusion(subString3, string3));


var checkInclusion2 = function (s1, s2) {
	// If s1 is larger than s2 then match is not possible
	// i.e (s1 cannot be substring of s2)
	if (s1.length > s2.length) return false;
	let neededChar = {}; //To Store the frequency/count of required string s1
	for (let i = 0; i < s1.length; i++) {
		// Initially neededChar[s1[i]] will be undefined and
		// undefined || 0 will return 0. So we increment it by 1
		neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
	}
    console.log(neededChar);
	/* 
	Now we have neededChar
	i.e neededChar={
		a:1,
		b:1
	}
	*/
	let left = 0, //left pointer/index of the sliding window
		right = 0, //right pointer/index of the sliding window
		requiredLength = s1.length //length of the substring required in s2

	// Now iterate until the right index of window is lesser than length of s2
	while (right < s2.length) {
        // eidbaooo
		// If we found s2 character in s1 i.e in neededChar then we decrease requiredLength
		if (neededChar[s2[right]] > 0) requiredLength--;
		// Since we have encountered new char i.e s2[right] we decrease it's 
		// count in neededChar even if it is not present in neededChar because we only care about neededChars
		neededChar[s2[right]]--;
        console.log(neededChar[s2[right]]);
		right++ //window is incremented by 1 step

		// Now if our requiredLength becomes 0 it means we have found a match of the s2 substring
		// So we return true
		if (requiredLength === 0) return true;

		// If our window length is equal to s1 length (length of string to search in s2)
		// then we have to remove left element of window i.e left++ and add new element from right 
		// will be added in next iteration
		if (right - left === s1.length) {
			// if the left element we are removing was a required character then we increase requiredLength
			// because that element will no longer be the part of sliding window
			if (neededChar[s2[left]] >= 0) requiredLength++;
            console.log("we here now");
            console.log(neededChar[s2[left]]);
            console.log(neededChar[s2[left]] >= 0);
			// We will also increase the count of left element removed from window
			neededChar[s2[left]]++;
			// And finally we will decrease the window size by 1 from left i.e left++
			left++
		}
	}
	// If match was not found we return false
	return false;
};

console.log("case 1");
console.log(checkInclusion2(subString1, string1));
// console.log("case 2");
// console.log(checkInclusion2(subString2, string2));
// console.log("case 3");
// console.log(checkInclusion2(subString3, string3));