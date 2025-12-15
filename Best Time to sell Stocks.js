//Best Time to Buy and Sell Stock You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
  let buyStock = prices[0];
  let maxprofit = 0;
  for (let i = 0; i <= prices.length - 1; i++) {
    if (buyStock > prices[i]) {
      buyStock = prices[i];
    }
    let profit = prices[i + 1] - buyStock;
    if (maxprofit < profit) {
      maxprofit = profit;
    }
  }

  return maxprofit; //Correct Approach
};

/*
var maxProfit = function(prices) {
let buyStock = prices[0];
let sellStock=0;
let pivot=0;
let profit;
    

for(let i=0;i<=prices.length-1;i++){
    if(prices[i]<=0) return 0
   else if(buyStock>prices[i]){
        buyStock=prices[i];
        pivot=i+1;
    }
   }
for(let j=pivot;j<=prices.length-1;j++){
    if(sellStock<prices[j]){
        sellStock=prices[j];
    } 
}
    profit = sellStock-buyStock;
    if(profit<=0) return 0
    return profit; 
    
    not right approach and wrong for some inputs
};

*/

//***************************//

/*
let prices = [7,1,5,3,6,4,9]
let maxProfit=0;
let buyStock=prices[0];
let sellStock
for(let i=0;i<=prices.length-1;i++){
 
 for(let j=i+1;j<=prices.length-1;j++){
    let profit = prices[j]-prices[i];
    if(maxProfit<profit){
        maxProfit=profit;
    }
}
    
}

console.log(maxProfit)

*Correct but This approach is not optimized O(n^2) complexity very bad
*/
