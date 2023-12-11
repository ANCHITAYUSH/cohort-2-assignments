/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

    let count = 0;
    let modifiedStr = str.toLowerCase();

    for(let i=0;i<modifiedStr.length;i++){
      if(modifiedStr[i]==="a"||modifiedStr[i]==="u"||modifiedStr[i]==="o"||modifiedStr[i]==="i"||modifiedStr[i]==="e"){
        count++;
      }
    }

    return count;
}

module.exports = countVowels;