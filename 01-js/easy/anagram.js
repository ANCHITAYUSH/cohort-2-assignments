/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  //Compare the length of 2 strings
  if(str1.length != str2.length){
    return false;
  }

  //Convert strings to lowercase for case insensitive strings
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  //Split, sort, and join the string
  str1 = str1.split("").sort().join();
  str2 = str2.split("").sort().join();

  //Loop over both the strings and compare
  for(let i=0;i<str1.length;i++){
    if(str1[i] != str2[i]){
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
