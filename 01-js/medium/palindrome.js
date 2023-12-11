/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let modifiedStr = str.replace(/ /g,'').replace(/[.,!?]/g, '').toLowerCase();
  let size = modifiedStr.length;

  for(let i=0;i<size/2;i++){
    if(modifiedStr[i] !== modifiedStr[size-1-i]){
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
