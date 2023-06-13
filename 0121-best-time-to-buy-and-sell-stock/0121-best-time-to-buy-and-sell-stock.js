/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max=prices[0]  
  let min=max
  let l=0, r=1, profit=0;
  while(r<prices.length){
      if(prices[r]<min){
          l=r
          max=prices[l]  
          min=prices[l]  
      }else if(prices[r]>max){
          max=prices[r]
          let newProfit=max-min
          if(newProfit>profit)
              profit=newProfit
          
      }
      r+=1
  }
    return profit;
};