/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let expenditures = [];

  //Check any transactions are done or not
  if(transactions === null || transactions.length === 0){
    return expenditures;
  }

  //Loop over the transactions array
  transactions.forEach(transaction => {
    //Check expenditures for given category 
    let expenditure = expenditures.find(ex => ex.category === transaction.category)
    if(expenditure != null){
      //if expenditure is there add the price
      expenditure.totalSpent += transaction.price;
    }else{
      //if expenditure is not there push new expenditure object
      expenditures.push({
        category: transaction.category,
        totalSpent: transaction.price
      });
    }
  });

  return expenditures;
}

module.exports = calculateTotalSpentByCategory;
