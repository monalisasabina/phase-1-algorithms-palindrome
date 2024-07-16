function isPalindrome(word) {
  // Write your algorithm here

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
let j = word.length - 1

for (let i = 0; i < word.length / 2; i++) {
    if (word[i] != word[j]) {
        return false;
    }
    j--;
}
return true;
}

let str1 = "abba";
let str2 = "racecar";
let str3 = "a";
let str4 = "robot"
let str5 = "ab"


console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));
console.log(isPalindrome(str5));



// You can run `node index.js` to view these console logs
 if (require.main === module) { 
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


//.......CODE 1...................................
/*
let j = word.length - 1
for (let i = 0; i < word.length / 2; i++) {
    if (word[i] != word[j]) {
        return false;
    }
    j--;
}
return true;
}

let str1 = "abba";
let str2 = "racecar";
let str3 = "a";
let str4 = "robot"
let str5 = "ab"

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
*/
// .....................................................