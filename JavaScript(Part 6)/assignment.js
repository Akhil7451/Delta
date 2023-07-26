// Qs   -   1

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
function getLargest(arr, num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

console.log(getLargest(arr, num));

// Qs   -   2

let str = "abcdabcdefgggh";
function getUnique(str) {
    let ans = "";
    for(let i=0; i<str.length; i++) {
        let currChar = str[i]
        if(ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}

console.log(getUnique(str));

// Qs   -   3

let country = ["Australia", "Germany", "United States of America"];
function getLongest(country) {
    let longest = "";
    for(let i=0; i<country.length; i++) {
        if(longest.length < country[i].length) {
            longest = country[i]
        }
    }
    return longest;
}

console.log(getLongest(country));

// Qs   -   4

let str1 = "vowel";
function countVowel(str1) {
    let count = 0;
    for(let i=0; i<str1.length; i++) {
        if(str1.charAt(i) == "a" ||
        str1.charAt(i) == "e" ||
        str1.charAt(i) == "i" ||
        str1.charAt(i) == "o" ||
        str1.charAt(i) == "u"
        ) {
            count++;
        }
    }
    return count;
}

console.log(countVowel(str1));

// Qs   -   5

let start = 100;
let end = 100;
function random(start, end) {
    return Math.floor(Math.random() * start) + end;
}

console.log(random(start, end));