/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    //Chevking if numbers are defiened or not
    if(numbers === null || numbers.length === 0){
        return undefined;
    }

    //Assign first number as largest number
    let max = numbers[0];

    //Loop over the number and compare with the current largest number
    for(let i=1;i<numbers.length;i++){
        if(max<numbers[i]){
            max = numbers[i];
        }
    }

    return max;
}

module.exports = findLargestElement;