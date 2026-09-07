function maxProfit(prices: number[]): number {
    /*
    * profit=0
    * left=0
    * right=1
    * while(right<nums.length)
    * if(profit<right-left)
    * set new profit
    * right<left
    * left=right
    * return profit
    */

let profit = 0;
let left=0;
let right=1
    while(right<prices.length){
        if(profit<(prices[right]-prices[left]))
            profit = prices[right]-prices[left];
        else if(prices[right]<prices[left])
            left=right;
        right++
    }
    return profit
};