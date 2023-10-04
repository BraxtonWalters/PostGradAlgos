// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//def a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// expected true
const a = "anagram";
const b = "nagaram";
// expected false
const c = "rat";
const d = "car";
// expected true
const e = "cinema";
const f = "iceman";
// expected false
const g = "aacc";
const h = "ccac";



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Check if the lengths of s and t are different
    if(s.length !== t.length){
        return false
    }
    // create a object of the 2 strings
    const objS = {};
    const objT = {};
    // add a value of 1 each time the loop encounters a letter
    for (let i = 0; i < s.length; i++){
        if(objS.hasOwnProperty(s[i])) {
            objS[s[i]] += 1;
        } else {
            objS[s[i]] = 1;
        }
        if(objT.hasOwnProperty(t[i])){
            objT[t[i]] += 1;
        } else {
            objT[t[i]] = 1;
        }
    }
    console.log(objS);
    console.log(objT);
    // after the loop is complete check to see if all values are equal to 2
    for (const letter in objS) {
        if (objS[letter] !== objT[letter]) {
            return false;
        }
    }
    return true;
};

// console.log("case 1");
// console.log(isAnagram(a, b));
// console.log("case 2");
// console.log(isAnagram(c, d));
// console.log("case 3");
// console.log(isAnagram(e, f));
// console.log("case 4");
// console.log(isAnagram(g, h));


// turn both strings into arrays of their respective characters
// for each character in array 1, if array2 contains that remove it from the array
// if array 2 is empty after this return true, else return false

const isAnagram2 = (str1, str2) => {
    if(str1.length !== str2.length){
        return false
    }

    const str1Arr = Array.from(str1);
    const str2Arr = Array.from(str2);

    for (let i = 0; i < str1Arr.length; i++) {
        let idx2 = str2Arr.indexOf(str1Arr[i]);
        if(idx2 > -1){
            str2Arr.splice(idx2, 1);
        }
    }

    if(str2Arr.length === 0) {
        return true;
    } else {
        return false;
    }
}

// console.log("case 1");
// console.log(isAnagram2(a, b));
// console.log("case 2");
// console.log(isAnagram2(c, d));
// console.log("case 3");
// console.log(isAnagram2(e, f));
// console.log("case 4");
// console.log(isAnagram2(g, h));
// Array.from <=== google me

const isAnagram3 = (str1, str2) => {
    // check if the lengths are the same or not
    if(str1.length !== str2.length) return false
    //Use the Array.from method to create a new copied array
    const str2Arr = Array.from(str2);
    //Loop through the 1st array to check and see if it matches the second array
    for (const char of str1) {
        // checking if the array has the character and if it doesn't return false
        if(!str2Arr.includes(char)) return false;
        // getting the index of the the character we are looking for in the array
        const idx2 = str2Arr.indexOf(char);
        // removing the character by using the index we got earlier
        str2Arr.splice(idx2, 1);
    }
    //Match against each other and if there are any characters left over, we know they do not match
    if(str2Arr.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("case 1");
console.log(isAnagram3(a, b));
console.log("case 2");
console.log(isAnagram3(c, d));
console.log("case 3");
console.log(isAnagram3(e, f));
console.log("case 4");
console.log(isAnagram3(g, h));